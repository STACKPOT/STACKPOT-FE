import { useState } from 'react';
import { bodyContainer, container, dividerStyle, listContainer, tabsContainer, tabsTextStyle } from './UserPage.style';
import { FloatingButton } from '@components/index';
import { useParams } from 'react-router-dom';
import ProfileContent from '@components/commons/ProfileContent/ProfileContent';
import { MyPageProfile } from '@pages/MyPage/components';

const UserPage = () => {
  const [contentType, setContentType] = useState<'feed' | 'pot' | 'introduction'>('feed');
  const { userId } = useParams<{ userId: string }>();

  if (!userId) {
    return <div>유효한 유저 ID가 필요합니다.</div>;
  }

  const UserId = Number(userId);

  return (
    <main css={container}>
      <MyPageProfile userId={UserId} />
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
        <div css={listContainer(contentType)}>
          <ProfileContent contentType={contentType} viewerIsOwner={false} userId={UserId} />
        </div>
      </div>
      <FloatingButton type={'feed'} />
    </main>
  );
};

export default UserPage;
