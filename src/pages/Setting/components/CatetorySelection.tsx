import { CategoryButton, } from '@components/index';
import { useFormContext } from 'react-hook-form';
import { interests, } from '@constants/categories';
import { categoryContainer, content, contentHeader } from './CategorySelection.style';


const CategorySelection = () => {
	const { setValue, watch } = useFormContext();

	const handleSelectCategory = (selected: string) => {
		setValue('interest', selected);
	};

	return (
		<div css={content(false)}>
			<div css={contentHeader}>
				<div>관심사</div>
				<div css={categoryContainer}>
					{interests.map((interest) => (
						<div key={interest}>
							<CategoryButton style="pot" selected={watch('interest') === interest} onClick={handleSelectCategory}>
								{interest}
							</CategoryButton>
						</div>
					))}
				</div>
			</div>

		</div>
	);
};
export default CategorySelection;
