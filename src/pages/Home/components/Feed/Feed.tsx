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
} from './Feed.style';
import { contentTitle, subTitleStyle } from '@pages/Home/Home.style';
import { useState, useEffect } from 'react';
import { categories, searchPartMap } from '@constants/categories';
import useGetFeeds from 'apis/hooks/feeds/useGetFeeds';
import { useInView } from 'react-intersection-observer';
import { LoadingSpinnerIcon } from '@assets/svgs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import routes from '@constants/routes';
import { roleImages } from '@constants/roleImage';

const categoryText: { [key: string]: string } = {
	ALL: '모든',
	FRONTEND: '프론트엔드',
	BACKEND: '백엔드',
	DESIGN: '디자인',
	PLANNING: '기획',
};

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [category, setCategory] = useState<string | null>(null);
	const [sort, setSort] = useState<string>('new');
	const [roleProfileImage, setRoleProfileImage] = useState<string>('');

	const handleCategoryClick = (category: string, partName: string) => {
		if (selectedCategory === partName) {
			setSelectedCategory(null);
			setCategory('ALL');
		} else {
			setSelectedCategory(partName);
			setCategory(category);
		}
	};

	const options = [
		{ label: '최신 순', key: 'new' },
		{ label: '인기 순', key: 'popular' },
		{ label: '오래된 순', key: 'old' },
	];

	const handleChange = (key: string) => {
		setSort(key);
	};
	const hanldeWriteFeed = () => {
		window.location.href = routes.writePost;
	};

	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetFeeds({
		category: category || 'ALL',
		sort,
		limit: 10,
		cursor: null,
	});

	const { ref, inView } = useInView();
	useEffect(() => {
		const role = localStorage.getItem('role');
		const profileImage = roleImages[role as keyof typeof roleImages] || '';
		setRoleProfileImage(profileImage);
	}, [localStorage.getItem('role')]);
	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

	return (
		<>
			<div css={contentHeader}>
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
				<div css={feedWriteContainer}>
					<div css={feedWriteText}>
						<img src={roleProfileImage} alt="profileImage" css={profileStyle} />
						<p>오늘 작업하다가 무슨 일이 있었냐면...</p>
					</div>
					<button onClick={hanldeWriteFeed} css={feedWriteButton}>
						피드 작성
					</button>
				</div>
			</div>
			<div css={contentBody}>
				{isLoading ? (
					<Skeleton css={cardStyle} />
				) : data?.pages && data.pages.length > 0 ? (
					data.pages.map((page, pageIndex) => (
						<>
							{page.result?.feeds && page.result.feeds.length > 0 ? (
								page.result.feeds.map((item, itemIndex) => {
									const isLastItem = pageIndex === data.pages.length - 1 && itemIndex === page.result.feeds.length - 1;
									return (
										<div key={item.feedId} ref={isLastItem ? ref : null}>
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
												isCommented={item.isCommented}
												feedId={item.feedId}
												isMyPost={false}
											/>
										</div>
									);
								})
							) : (
								<p>게시물이 없습니다.</p>
							)}
						</>
					))
				) : (
					<p>게시물이 없습니다.</p>
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
