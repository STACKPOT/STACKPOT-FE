import { CategoryButton, Dropdown, PostCard } from '@components/index';
import {
	buttonContainer,
	cardStyle,
	contentBody,
	contentHeader,
	iconContainer,
	iconStyle,
	feedWriteContainer,
	feedWriteText,
	feedWriteButton,
	profileStyle,
	emptyFeedFallbackStyle,
} from './Feed.style';
import { contentTitle } from '@pages/Home/Home.style';
import { useState, useEffect, use } from 'react';
import { categories, searchPartMap } from '@constants/categories';
import useGetFeeds from 'apis/hooks/feeds/useGetFeeds';
import { useInView } from 'react-intersection-observer';
import { LoadingSpinnerIcon } from '@assets/svgs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import routes from '@constants/routes';
import { roleImages } from '@constants/roleImage';
import useGetMyProfile from 'apis/hooks/users/useGetMyProfile';

import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/useAuthStore';

const categoryText: { [key: string]: string } = {
	ALL: '모든',
	PLANNING: '기획',
	DESIGN: '디자인',
	BACKEND: '백엔드',
	FRONTEND: '프론트엔드',
};

const options = [
	{ label: '최신 순', key: 'new' },
	{ label: '인기 순', key: 'popular' },
	{ label: '오래된 순', key: 'old' },
];

const EmptyFeedFallback = ({ onWrite }: { onWrite: () => void }) => (
	<div css={emptyFeedFallbackStyle}>
		<div>🥲</div>
		<p>
			피드가 비어 있어요.
			<br />첫 글을 써 볼까요?
		</p>
		<button onClick={onWrite} css={feedWriteButton}>
			피드 작성
		</button>
	</div>
);

const Feed = () => {
	const navigate = useNavigate();
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [category, setCategory] = useState<string | null>(null);
	const [sort, setSort] = useState<string>('new');

	const { data: user } = useGetMyProfile(!!localStorage.getItem('accessToken'));

	const role = useAuthStore((state) => state.role);
	const profileImage = roleImages[(role as keyof typeof roleImages) || 'UNKNOWN'];

	const handleCategoryClick = (category: string, partName: string) => {
		if (selectedCategory === partName) {
			setSelectedCategory(null);
			setCategory('ALL');
		} else {
			setSelectedCategory(partName);
			setCategory(category);
		}
	};

	const handleChange = (key: string) => {
		setSort(key);
	};
	const hanldeWriteFeed = () => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			navigate(routes.writePost);
		} else {
			const link = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${
				import.meta.env.VITE_REDIRECT_URI
			}&response_type=code
&scope=account_email
&prompt=login`;
			window.location.href = link;
		}
	};

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetFeeds({
		category: category || 'ALL',
		sort,
		limit: 10,
		cursor: null,
	});

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

	return (
		<>
			<div css={contentHeader}>
				<div css={feedWriteContainer} onClick={hanldeWriteFeed}>
					<div css={feedWriteText}>
						<img src={profileImage} alt="profileImage" css={profileStyle} />
						<p>오늘 작업하다가 무슨 일이 있었냐면...</p>
					</div>
					<button css={feedWriteButton}>피드 작성</button>
				</div>
				<div css={contentTitle}>
					<p css={{ color: '#2098F3' }}>{categoryText[category ?? 'ALL']}</p>
					<p> 피드를 탐색해볼까요?</p>
					<div css={{ marginLeft: 'auto' }}>
						<Dropdown options={options} handleChange={handleChange} />
					</div>
				</div>
				<div css={buttonContainer}>
					{Object.keys(searchPartMap).map((partName) => (
						<div key={partName} css={categories}>
							<CategoryButton style="pot" selected={selectedCategory === partName} onClick={() => handleCategoryClick(searchPartMap[partName], partName)}>
								{partName}
							</CategoryButton>
						</div>
					))}
				</div>
			</div>
			<div css={contentBody}>
				{isLoading ? (
					<Skeleton css={cardStyle} />
				) : data?.pages && data.pages.length > 0 ? (
					data.pages.map((page, pageIndex) => (
						<div key={`page-${pageIndex}`}>
							{page.result?.feeds && page.result.feeds.length > 0 ? (
								page.result.feeds.map((item, itemIndex) => {
									const isLastItem = pageIndex === data.pages.length - 1 && itemIndex === (page.result?.feeds?.length ?? 0) - 1;
									const isMyPost = user?.id === item.writerId;
									return (
										<div key={`feed-${item.feedId}`} ref={isLastItem ? ref : null}>
											<PostCard
												role={item.writerRole}
												writerId={item.writerId}
												nickname={item.writer}
												createdAt={item.createdAt}
												title={item.title}
												content={item.content}
												likeCount={item.likeCount}
												saveCount={item.saveCount}
												commentCount={item.commentCount}
												isLiked={item.isLiked}
												isSaved={item.isSaved}
												feedId={item.feedId}
												isMyPost={isMyPost}
											/>
										</div>
									);
								})
							) : (
								<EmptyFeedFallback onWrite={hanldeWriteFeed} />
							)}
						</div>
					))
				) : (
					<EmptyFeedFallback onWrite={hanldeWriteFeed} />
				)}
				{isFetchingNextPage && (
					<div css={iconContainer}>
						<LoadingSpinnerIcon css={iconStyle} />
					</div>
				)}
			</div>
		</>
	);
};

export default Feed;
