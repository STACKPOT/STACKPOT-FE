import { useEffect, useMemo, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { MyPotCard, PostCard } from '@components/index';
import { AddIcon, SearchBlueIcon } from '@assets/svgs';
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
import { Feeds, GetMyPagePotsParams, MyPagePotItem } from 'apis/types/user';
import useGetProfileFeeds from 'apis/hooks/users/useGetProfileFeeds';
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
  const { data } = useGetProfileFeeds(userId);
  const feeds = data?.feeds ?? [];
  const defaultSeries = data?.seriesComments ?? [{ label: '전체보기' }];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSeriesModalOpen, setIsSeriesModalOpen] = useState(false);
  const [seriesList, setSeriesList] = useState(defaultSeries);

  useEffect(() => {
    setSeriesList(defaultSeries);
  }, [defaultSeries]);

  const filteredPosts = useMemo(() =>
    feeds.filter(
      (post: Feeds) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
    [feeds, searchTerm],
  );

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
          {seriesList.map(({ label }, index) => (
            <button
              key={label}
              css={feedCategoryButton(selectedIndex === index)}
              onClick={() => setSelectedIndex(index)}
            >
              {label}
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
      {filteredPosts.map((post) => (
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
          onConfirm={(updated) => setSeriesList(updated)}
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
          {...pot} />
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

