import { useState } from 'react';
import {
	bodyContainer,
	container,
	dividerStyle,
	feedWriteButton,
	feedWriteContainer,
	feedWriteProfileStyle,
	feedWriteText,
	listContainer,
	tabsContainer,
	tabsTextStyle,
} from './MyPage.style';
import { MyPageProfile } from './components';
import { FinishedPotCard, FloatingButton, PostCard } from '@components/index';
import useGetMyPage from 'apis/hooks/users/useGetMyPage';
import { Role } from 'types/role';
import { roleImages } from '@constants/roleImage';
import routes from '@constants/routes';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/useAuthStore';

const MyPage = () => {
	const navigate = useNavigate();
	const [contentType, setContentType] = useState<'feed' | 'pot'>('feed');

	const role = useAuthStore((state) => state.role);
	const profileImage = roleImages[role as keyof typeof roleImages] || '';

	const { data } = useGetMyPage({ dataType: contentType });

	const hanldeWriteFeed = () => {
		navigate(routes.writePost);
	};
	if (!data) {
		return <div>데이터가 없습니다.</div>;
	}

	return (
		<main css={container}>
			<MyPageProfile />
			<div css={dividerStyle} />
			<div css={bodyContainer}>
				<div css={tabsContainer}>
					<p css={tabsTextStyle(contentType === 'feed')} onClick={() => setContentType('feed')}>
						피드
					</p>
					<p css={tabsTextStyle(contentType === 'pot')} onClick={() => setContentType('pot')}>
						끓인 팟
					</p>
				</div>
				<div css={feedWriteContainer}>
					<div css={feedWriteText} onClick={hanldeWriteFeed}>
						<img src={profileImage} alt="profileImage" css={feedWriteProfileStyle} />
						<p>오늘 작업하다가 무슨 일이 있었냐면...</p>
					</div>
					<button css={feedWriteButton}>피드 작성</button>
				</div>
				<div css={listContainer(contentType)}>
					{contentType === 'feed'
						? data.feeds.map((post) => (
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
									isMyPost={true}
								/>
						  ))
						: data.completedPots.map((pot) => {
								let members = [] as Role[];
								Object.entries(pot.memberCounts).forEach((part) => {
									for (let i = 0; i < part[1]; i++) {
										members.push(part[0] as Role);
									}
								});
								return (
									<FinishedPotCard
										id={pot.potId}
										title={pot.potName}
										myRole={pot.userPotRole}
										startDate={pot.potStartDate}
										stacks={pot.members}
										languages={pot.potLan}
										key={pot.potId}
										members={members}
										isProfilePage={true}
										endDate={pot.potEndDate}
										buttonType="appeal"
										isUserPage={false}
									/>
								);
						  })}
				</div>
			</div>
			<FloatingButton type={'feed'} />
		</main>
	);
};

export default MyPage;
