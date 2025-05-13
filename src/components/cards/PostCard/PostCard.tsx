import React, { useState } from 'react';
import {
	cardStyle,
	profileContainer,
	profileImageStyle,
	nicknameStyle,
	titleStyle,
	contentStyle,
	dateStyle,
	likeContainer,
	likeIconStyle,
	nicknameDateContainer,
	moreIconStyle,
	headerContainer,
	saveIconStyle,
	commentIconStyle,
	textStyle,
} from './PostCard.style';
import { LikeIcon } from '@assets/svgs';
import MyFeedDropdown from '@components/commons/Dropdown/MyFeedDropdown/MyFeedDropdown';
import { roleImages } from '@constants/roleImage';
import { Role } from 'types/role';
import { useNavigate } from 'react-router-dom';
import routes from '@constants/routes';
import usePostFeedLike from 'apis/hooks/feeds/usePostFeedLike';
import usePostFeedComment from 'apis/hooks/feeds/usePostFeedComment';
import usePostFeedSave from 'apis/hooks/feeds/usePostFeedSave';
import useDeleteFeed from 'apis/hooks/feeds/useDeleteFeed';

interface PostCardProps {
	role: Role;
	nickname: string;
	createdAt: string;
	title: string;
	content: string;
	likeCount: number;
	saveCount: number;
	commentCount: number;
	isLiked: boolean;
	isSaved: boolean;
	isCommented: boolean;
	profileImage?: string;
	feedId: number;
	writerId: number;
	isMyPost: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
	role,
	nickname,
	createdAt,
	title,
	content,
	likeCount,
	saveCount,
	commentCount,
	isLiked,
	isSaved,
	isCommented,
	feedId,
	writerId,
	isMyPost,
}: PostCardProps) => {
	const { mutate: likeFeed } = usePostFeedLike();
	const { mutate: saveFeed } = usePostFeedSave();
	const { mutate: commentFeed } = usePostFeedComment();

	const navigate = useNavigate();

	const [isLike, setIsLike] = useState<boolean>(isLiked);
	const [likes, setLikes] = useState<number>(likeCount);
	const [isSave, setIsSave] = useState<boolean>(isSaved);
	const [saves, setSaves] = useState<number>(saveCount ?? 0);
	const [isComment, setIsComment] = useState<boolean>(isCommented);
	const [comments, setComments] = useState<number>(commentCount ?? 0);

	const { mutate: deleteFeed } = useDeleteFeed();

	const accessToken = localStorage.getItem('accessToken');

	const handleLike = (e: React.MouseEvent<SVGSVGElement>) => {
		e.stopPropagation();
		if (accessToken) {
			likeFeed(feedId, {
				onSuccess: () => {
					setIsLike((prev) => !prev);
					setLikes((prev) => (isLike ? prev - 1 : prev + 1));
				},
			});
		}
	};
	const handleSave = (e: React.MouseEvent<SVGSVGElement>) => {
		e.stopPropagation();
		if (accessToken) {
			setIsSave((prev) => !prev);
			setSaves((prev) => (isSave ? prev - 1 : prev + 1));
			// saveFeed(feedId, {
			// 	onSuccess: () => {
			// 		setIsSave((prev) => !prev);
			// 		setSaves((prev) => (isSave ? prev - 1 : prev + 1));
			// 	},
			// });
		}
	};
	const handleComment = (e: React.MouseEvent<SVGSVGElement>) => {
		e.stopPropagation();
		if (accessToken) {
			setIsComment((prev) => !prev);
			setComments((prev) => (isComment ? prev - 1 : prev + 1));
			// commentFeed(feedId, {
			// 	onSuccess: () => {
			// 		setIsComment((prev) => !prev);
			// 		setComments((prev) => (isComment ? prev - 1 : prev + 1));
			// 	},
			// });
		}
	};
	const handleEdit = () => {
		if (accessToken) navigate(`${routes.feed.edit}/${feedId}`);
	};

	const handleDelete = () => {
		if (feedId) {
			deleteFeed(feedId);
		}
	};

	const handleFeedClick = (feedId: number) => {
		if (accessToken) {
			navigate(`${routes.feed.base}/${feedId}`);
			window.scrollTo(0, 0);
		}
	};

	const handleUserClick = (userId: number) => {
		if (accessToken) {
			navigate(`${routes.userProfile}/${userId}`);
		}
	};

	const profileImage = roleImages[role];

	return (
		<div css={cardStyle} onClick={() => handleFeedClick(feedId)}>
			<div css={headerContainer}>
				<div css={profileContainer}>
					<img
						onClick={(e) => {
							e.stopPropagation();
							handleUserClick(writerId);
						}}
						css={profileImageStyle}
						src={profileImage}
						alt="profile"
					/>
					<div css={nicknameDateContainer}>
						<p
							onClick={(e) => {
								e.stopPropagation();
								handleUserClick(writerId);
							}}
							css={nicknameStyle}>
							{nickname}
						</p>
						<p css={dateStyle}>{createdAt}</p>
					</div>
				</div>
				{isMyPost && (
					<div
						css={moreIconStyle}
						onClick={(e) => {
							e.stopPropagation();
						}}>
						<MyFeedDropdown topMessage="수정하기" bottomMessage="삭제하기" onTop={handleEdit} onBottom={handleDelete} />
					</div>
				)}
			</div>
			<h1 css={titleStyle}>{title}</h1>
			<p css={contentStyle}>{content}</p>
			<div css={likeContainer}>
				<LikeIcon type="button" css={likeIconStyle(isLike, accessToken !== null)} onClick={handleLike} />
				<p css={textStyle}>{likes}</p>
				<LikeIcon type="button" css={saveIconStyle(isSave, accessToken !== null)} onClick={handleSave} />
				<p css={textStyle}>{saves}</p>
				<LikeIcon type="button" css={commentIconStyle(isComment, accessToken !== null)} onClick={handleComment} />
				<p css={textStyle}>{comments}</p>
			</div>
		</div>
	);
};

export default PostCard;
