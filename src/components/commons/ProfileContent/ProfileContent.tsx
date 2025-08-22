import { useMemo, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { MyPotCard, PostCard } from '@components/index';
import { AddIcon, SearchBlueIcon } from '@assets/svgs';
import useGetSearchMyFeeds from 'apis/hooks/searches/useGetSearchMyFeeds';
import useGetSearchFeedsUsers from 'apis/hooks/searches/useGetSearchFeedsUsers';
import useGetProfileFeeds from 'apis/hooks/users/useGetProfileFeeds';
import usePostFeedSeries from 'apis/hooks/feeds/usePostFeedSeries';

import {
  feedHeaderContainer,
  feedCategoryButtonGroup,
  feedCategoryButton,
  feedSearchBox,
  feedCategoryAddButton,
  introductionWrapper,
  introductionButton,
  introductionBodyStyle,
  introductionContentStyle,
  emptyFeedFallbackStyle,
  introductionWriteButton,
} from './ProfileContent.style';
import usePatchDescription from 'apis/hooks/users/usePatchDescription';
import { GetMyPagePotsParams, MyPagePotItem } from 'apis/types/user';
import useGetProfilePots from 'apis/hooks/users/useGetProfilePots';
import useGetProfileDescription from 'apis/hooks/users/useGetProfileDescription';
import SeriesModal from './SeriesModal/SeriesModal';
import { partKoreanNameMap } from '@constants/categories';

type Props = {
  contentType: 'feed' | 'pot' | 'introduction';
  viewerIsOwner: boolean;
  userId?: number;
};

const FeedContent = ({ userId, viewerIsOwner }: { userId?: number, viewerIsOwner: boolean }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const hasSearch = searchTerm.trim().length > 0;

  const {
    data: searchData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = viewerIsOwner
      ? useGetSearchMyFeeds({ keyword: searchTerm, size: 10, })
      : useGetSearchFeedsUsers({ keyword: searchTerm, size: 10, userId: userId! });

  const profileQuery = useGetProfileFeeds(userId);
  const profileData = hasSearch ? undefined : profileQuery.data;

  const feeds = useMemo(() => {
    if (hasSearch) {
      return searchData?.pages.flatMap((page) => page.result?.feeds ?? []) ?? [];
    }
    return profileData?.feeds ?? [];
  }, [hasSearch, searchData, profileData]);

  const { mutate } = usePostFeedSeries();
  const seriesList = profileData?.seriesComments ?? [{ comments: '전체보기' }];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);

  return (
    <>
      <div css={feedHeaderContainer}>
        <div css={feedCategoryButtonGroup}>
          {viewerIsOwner && <button
            css={feedCategoryAddButton}
            onClick={() => {
              setIsSeriesModalOpen(true);
            }}
          >
            <AddIcon />
          </button>
          }
          {seriesList.map(({ comments }, index) => (
            <button
              key={comments}
              css={feedCategoryButton(selectedIndex === index)}
              onClick={() => setSelectedIndex(index)}
            >
              {comments}
            </button>
          ))}
        </div>
        <div css={feedSearchBox}>
          <input
            placeholder="검색어를 입력해주세요."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span role="img" aria-label="search"><SearchBlueIcon /></span>
        </div>
      </div>
      {feeds.map((post) => (
        <PostCard
          nickname={post.writer}
          role={post.writerRole}
          isLiked={post.isLiked}
          likeCount={post.likeCount}
          key={post.feedId}
          createdAt={post.createdAt}
          title={post.title}
          content={post.content}
          feedId={post.feedId}
          writerId={post.writerId}
          saveCount={post.saveCount}
          commentCount={post.commentCount}
          isSaved={post.isSaved}
          isMyPost={viewerIsOwner}
        />
      ))}
      {isSeriesModalOpen && (
        <SeriesModal
          defaultSeriesList={seriesList}
          onConfirm={(updated) => mutate({ comments: updated.map((s) => s.comments) })}
          onClose={() => setIsSeriesModalOpen(false)}
        />
      )}
    </>
  );
};

const PotContent = ({ userId }: { userId?: number }) => {
  const [status, setStatus] = useState<GetMyPagePotsParams['potStatus']>('all');
  const { data: pots } = useGetProfilePots(status, userId);

  const STATUS_TABS: { key: GetMyPagePotsParams['potStatus']; label: string }[] = [
    { key: 'all', label: '전체보기' },
    { key: 'recruiting', label: '모집 중인 팟' },
    { key: 'ongoing', label: '진행 중인 팟' },
    { key: 'completed', label: '끓인 팟' },
  ];

  return (
    <>
      <div css={feedHeaderContainer}>
        <div css={feedCategoryButtonGroup}>
          {STATUS_TABS.map(({ key, label }) => (
            <button
              key={key}
              css={feedCategoryButton(status === key)}
              onClick={() => setStatus(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {(pots ?? []).map((pot: MyPagePotItem) => (
        <MyPotCard
          key={pot.potId}
          recruitmentRoles={Object.keys(pot.members).map(
            (role) => partKoreanNameMap[role]
          )}
          type={'myPage'}
          {...pot}
          userId={userId} />
      ))}
    </>
  );
};

const IntroductionContent = ({ userId, viewerIsOwner }: { userId?: number; viewerIsOwner: boolean }) => {
  const { data: description } = useGetProfileDescription(userId);
  const { mutate } = usePatchDescription();
  const [isEditing, setIsEditing] = useState(false);
  const [body, setBody] = useState(description ?? '');

  const handleSave = () => {
    mutate(
      { userDescription: body ?? '' },
      {
        onSuccess: () => setIsEditing(false),
        onError: () => setIsEditing(true),
      },
    );
  };

  if (!body && !isEditing) {
    return (
      <div css={emptyFeedFallbackStyle}>
        <div>소개가 작성되지 않았어요</div>
        {viewerIsOwner && (
          <button onClick={() => setIsEditing(true)} css={introductionWriteButton}>
            소개글 작성하기
          </button>
        )}
      </div>
    );
  }

  return (
    <div css={introductionContentStyle}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        {viewerIsOwner && (
          <button onClick={isEditing ? handleSave : () => setIsEditing(true)} css={introductionButton}>
            {isEditing ? '저장하기' : '편집하기'}
          </button>
        )}
      </div>

      {isEditing && viewerIsOwner ? (
        <div css={introductionWrapper(isEditing)}>
          <div>
            <MDEditor value={body} onChange={(val = '') => setBody(val)} height={400} css={introductionBodyStyle} />
          </div>
        </div>
      ) : (
        <div css={introductionWrapper(isEditing)}>
          <MDEditor.Markdown source={body} css={introductionBodyStyle} />
        </div>
      )}
    </div>
  );
};

const ProfileContent = ({ contentType, viewerIsOwner, userId }: Props) => {
  switch (contentType) {
    case 'feed':
      return <FeedContent userId={userId} viewerIsOwner={viewerIsOwner} />;
    case 'pot':
      return <PotContent userId={userId} />;
    default:
      return <IntroductionContent userId={userId} viewerIsOwner={viewerIsOwner} />;
  }
};

export default ProfileContent;
