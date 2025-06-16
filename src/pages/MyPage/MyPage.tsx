import { useState } from 'react';
import {
	bodyContainer,
	container,
	dividerStyle,
	listContainer,
	tabsContainer,
	tabsTextStyle,
} from './MyPage.style';
import { MyPageProfile } from './components';
import { CtaCard, FloatingButton } from '@components/index';
import useGetMyPage from 'apis/hooks/users/useGetMyPage';
import MyPageContent from './components/MyPageContent/MyPageContent';



const MyPage = () => {
	const [contentType, setContentType] = useState<'feed' | 'pot' | 'introduction'>('feed');
	const { data } = useGetMyPage({ dataType: contentType });
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
						모든 팟
					</p>
					<p css={tabsTextStyle(contentType === 'introduction')} onClick={() => setContentType('introduction')}>
						소개
					</p>
				</div>
				{contentType !== 'introduction' && <CtaCard type="feed" />}
				<div css={listContainer(contentType)}>
					<MyPageContent contentType={contentType} data={data} />
				</div>
			</div>
			<FloatingButton type={'feed'} />
		</main>
	);
};

export default MyPage;
