import { forwardRef, useState } from "react";
import { CategoryButton, Modal } from "@components/index";
import { useFormContext } from "react-hook-form";
import { interests, partMap } from "@constants/categories";
import { categoriesStyle, categoryContainer, content, contentBody, contentHeader } from "./CategorySelection.style";
import { GetUserResponse } from "apis/types/user";

interface CategorySelectionProps {
    type: "role" | "interest";
    profile?: GetUserResponse;
}
const CategorySelection = forwardRef<HTMLDivElement, CategorySelectionProps>(
    ({ type, profile }, ref) => {
        const { setValue, watch } = useFormContext();
        const categories = type === "role" ? Object.keys(partMap) : interests;
        const [selectedCategory] = watch([type]);
        const [pendingRole, setPendingRole] = useState<string | null>();
        const [isModalOpen, setIsModalOpen] = useState(false);

        const handleSelectCategory = (selected: string) => {
            if (type === "role" && selectedCategory !== partMap[selected]) {
                setPendingRole(partMap[selected]);
                setIsModalOpen(true);
            }
            else if (type === "interest") {
                setValue(type, selected)
            }
        }

        const handleConfirmRole = () => {
            if (pendingRole) {
                setValue("role", pendingRole)
                setPendingRole(null);
            }
            setIsModalOpen(false);
        };

        const handleCloseRoleModal = () => {
            setPendingRole(null);
            setIsModalOpen(false);
        };

        return (
            <div css={content(false)} ref={ref}>
                <div css={contentHeader}>{type === "role" ? "메인 역할" : "관심사"}</div>
                <p css={contentBody}>{type === "role" ?
                    "역할은 하나만 선택해 주세요. 변경 시 닉네임도 바뀌게 됩니다" :
                    "가장 관심있는 분야를 선택해주세요."}
                </p>
                <div css={categoryContainer}>
                    {categories.map((categoryName) => (
                        <div key={categoryName} css={categoriesStyle}>
                            <CategoryButton
                                style="pot"
                                selected={watch(type) === (type === "role" ? partMap[categoryName] : categoryName)}
                                onClick={handleSelectCategory}
                            >
                                {categoryName}
                            </CategoryButton>
                        </div>
                    ))}
                </div>
                {isModalOpen && (
                    <Modal
                        title="메인 역할을 변경할까요?"
                        message={`메인 역할을 변경할 경우,\n닉네임 또한 [${profile?.nickname}]에서 새로운 닉네임으로 변경됩니다.`}
                        onConfirm={handleConfirmRole}
                        onCancel={handleCloseRoleModal}
                    />
                )}
            </div>
        )
    }
)
export default CategorySelection;