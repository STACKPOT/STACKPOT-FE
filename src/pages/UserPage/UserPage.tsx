import { useEffect, useState } from 'react';
import { bodyContainer, container, dividerStyle, listContainer, tabsContainer, tabsTextStyle } from './UserPage.style';
import { FloatingButton } from '@components/index';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileContent from '@components/commons/ProfileContent/ProfileContent';
import { MyPageProfile } from '@components/commons/ProfileContent';
import useGetMyProfile from 'apis/hooks/users/useGetMyProfile';
import routes from '@constants/routes';

const UserPage = () => {
  const [contentType, setContentType] = useState<'feed' | 'pot' | 'introduction'>('feed');
  const { userId } = useParams<{ userId: string }>();
  const { data: user } = useGetMyProfile();
  const navigate = useNavigate();
  const targetUserId = Number(userId);
  if (Number.isNaN(targetUserId)) {
    return <div>유효한 유저 ID가 필요합니다.</div>;
  }
  const viewerIsOwner = targetUserId === user?.id;

  useEffect(() => {
    if (viewerIsOwner) {
      navigate(routes.myPage);
    }
  }, [navigate, viewerIsOwner]);

  return (
    <main css={container}>
      <MyPageProfile userId={targetUserId} viewerIsOwner={false} />
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
          <ProfileContent contentType={contentType} viewerIsOwner={false} userId={targetUserId} />
        </div>
      </div>
      <FloatingButton type={'feed'} />
    </main>
  );
};

export default UserPage;
