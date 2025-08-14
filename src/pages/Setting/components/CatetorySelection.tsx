import { CategoryButton, } from '@components/index';
import { useFormContext, useWatch } from 'react-hook-form';
import { interests, } from '@constants/categories';
import { categoryContainer, content, contentHeader } from './CategorySelection.style';



const CategorySelection = () => {
	const { control, setValue } = useFormContext<{ interest: string[] }>();
	const interest = useWatch({ control, name: "interest", defaultValue: [] });

	const handleSelectCategory = (selected: string) => {
		const next = interest.includes(selected)
			? interest.filter(v => v !== selected)
			: [...interest, selected];
		setValue("interest", next, { shouldDirty: true });
	};

	return (
		<div css={content(false)}>
			<div css={contentHeader}>
				<div>관심사</div>
				<div css={categoryContainer}>
					{interests.map((item) => (
						<div key={item}>
							<CategoryButton style="pot" selected={interest.includes(item)} onClick={() => handleSelectCategory(item)}>
								{item}
							</CategoryButton>
						</div>
					))}
				</div>
			</div>

		</div>
	);
};
export default CategorySelection;
