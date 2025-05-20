import { CategoryButton, PostCard, PotCard, SearchInput } from '@components/index';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	buttonContainer,
	feedContainer,
	gridContainer,
	mainContainer,
	paginationContainer,
	paginationItemStyle,
	paginationStyle,
	pointStyle,
	textStyle,
	topContainer,
} from './SearchResult.style';
import { categoryOptions } from '@constants/categories';
import useGetSearch from 'apis/hooks/searches/useGetSearch';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import { useDebounce } from 'use-debounce';

const SearchResult = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const initialQuery = queryParams.get('query') || '';
	const [query, setQuery] = useState(initialQuery);
	const navigate = useNavigate();
	const [selectedCategory, setSelectedCategory] = useState<string | null>('팟');
	const [currentPage, setCurrentPage] = useState(1);
	const [debouncedQuery] = useDebounce(query, 500);

	const type = selectedCategory === '팟' ? 'pot' : 'feed';
	const size = selectedCategory === '팟' ? 6 : 3;

	const { data } = useGetSearch({
		type: type,
		keyword: debouncedQuery,
		page: currentPage,
		size: size,
	});

	useEffect(() => {
		const updatedQuery = queryParams.get('query') || '';
		setQuery(updatedQuery);
	}, [location]);

	const handleSearch = () => {
		if (query) {
			navigate(`/search-result?query=${query}`);
		}
	};

	const handleClick = (category: string) => {
		setSelectedCategory(category);
		setCurrentPage(1);
	};

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setCurrentPage(value);
		window.scrollTo(0, 0);
	};

	return (
		<main css={mainContainer}>
			<div css={topContainer}>
				<SearchInput query={query} setQuery={setQuery} onSearch={handleSearch} onKeyDown={handleSearch} />
				<p css={textStyle}>
					<span css={pointStyle}>{query}</span>에 대한 총{` `}
					<span css={pointStyle}>{data?.totalElements}</span>
					개의 피드와 팟 검색 결과가 발견되었어요.
				</p>
				<div css={buttonContainer}>
					{categoryOptions.map((category) => (
						<CategoryButton key={category} style="pot" selected={selectedCategory === category} onClick={() => handleClick(category)}>
							{category}
						</CategoryButton>
					))}
				</div>
			</div>
			{selectedCategory === '팟' ? (
				<div css={gridContainer}>
					{data?.content?.map((pot, index) => (
						<PotCard
							potId={pot.potId}
							userId={pot.userId}
							key={`${pot.userId}-${pot.potName}-${index}`}
							role={pot.userRole}
							nickname={pot.userNickname}
							dday={pot.dday}
							title={pot.potName}
							content={pot.potContent}
							categories={pot.recruitmentRoles}
						/>
					))}
				</div>
			) : (
				<div css={feedContainer}>
					{data?.content?.map((feed, index) => (
						<PostCard
							key={`${feed.userId}-${index}`}
							role={feed.creatorRole}
							nickname={feed.creatorNickname}
							createdAt={feed.createdAt}
							title={feed.title}
							content={feed.content}
							likeCount={feed.likeCount}
							isLiked={feed.isLiked}
							feedId={feed.feedId}
							writerId={feed.userId}
							saveCount={feed.saveCount}
							commentCount={feed.commentCount}
							isSaved={feed.isSaved}
							isCommented={feed.isCommented}
						/>
					))}
				</div>
			)}
			<div css={paginationContainer}>
				<Pagination
					count={data?.totalPages}
					page={currentPage}
					onChange={handlePageChange}
					color="primary"
					shape="rounded"
					css={paginationStyle}
					renderItem={(item) => <PaginationItem {...item} css={paginationItemStyle} />}
				/>
			</div>
		</main>
	);
};

export default SearchResult;
