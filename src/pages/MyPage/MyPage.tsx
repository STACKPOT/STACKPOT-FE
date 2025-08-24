import { useState } from 'react';
import {
	bodyContainer,
	container,
	dividerStyle,
	listContainer,
	tabsContainer,
	tabsTextStyle,
} from './MyPage.style';
import { CtaCard, } from '@components/index';
import ProfileContent from '@components/commons/ProfileContent/ProfileContent';
import { MyPageProfile } from '@components/commons/ProfileContent';

const MyPage = () => {
	const [contentType, setContentType] = useState<'feed' | 'pot' | 'introduction'>('feed');

	return (
		<main css={container}>
			<MyPageProfile viewerIsOwner={true} />
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
				{contentType === 'feed' && <CtaCard type="feed" />}
				<div css={listContainer(contentType)}>
					<ProfileContent contentType={contentType} viewerIsOwner={true} />
				</div>
			</div>
		</main>
	);
};

export default MyPage;
