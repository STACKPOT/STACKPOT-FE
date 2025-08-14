import { useState } from 'react';
import { bodyContainer, container, dividerStyle, listContainer, tabsContainer, tabsTextStyle } from './UserPage.style';
import { CtaCard, FloatingButton } from '@components/index';
import { useParams } from 'react-router-dom';
import ProfileContent from '@components/commons/ProfileContent/ProfileContent';
import { MyPageProfile } from '@pages/MyPage/components';
import useGetMyProfile from 'apis/hooks/users/useGetMyProfile';

const UserPage = () => {
  const [contentType, setContentType] = useState<'feed' | 'pot' | 'introduction'>('feed');
  const { userId } = useParams<{ userId: string }>();
  const { data: user } = useGetMyProfile();

  if (!userId) {
    return <div>유효한 유저 ID가 필요합니다.</div>;
  }

  const UserId = Number(userId);
  const viewerIsOwner = UserId === user?.id;

  return (
    <main css={container}>
      <MyPageProfile userId={UserId} viewerIsOwner={viewerIsOwner} />
      <div css={dividerStyle} />
      <div css={bodyContainer}>
        <div css={tabsContainer}>
          <p css={tabsTextStyle(contentType === 'feed')} onClick={() => setContentType('feed')}>
            피드
          </p>
          <p css={tabsTextStyle(contentType === 'pot')} onClick={() => setContentType('pot')}>
            모든 팟
          </p>
          <p css={tabsTextStyle(contentType === 'introduction')} onClick={() => setContentType('introduction')}>
            소개
          </p>
        </div>
        {viewerIsOwner && contentType === 'feed' && <CtaCard type="feed" />}
        <div css={listContainer(contentType)}>
          <ProfileContent contentType={contentType} viewerIsOwner={viewerIsOwner} userId={UserId} />
        </div>
      </div>
      <FloatingButton type={'feed'} />
    </main>
  );
};

export default UserPage;
