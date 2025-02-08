import { useState } from "react";
import { useBlocker } from "react-router-dom";
import { buttonContainer, categories, categoryContainer, container, contentContainer, contentBody, contentTitle, iconStyle, inputStyle, textareaStyle, toastStyle } from "./EditPost.style";
import { PotIcon } from "@assets/svgs";
import { Button, CategoryButton, Modal, PotButton, UploadToast } from "@components/index";
import { partMap } from "@constants/categories";

const EditPost = () => {
    const [title, setTitle] = useState<string>("원래 제목입니당");
    const [content, setContent] = useState<string>("원래 내용입니다.");
    const [selectedPart, setSelectedPart] = useState<string | null>("프론트엔드");

    const [isFilled, setIsFilled] = useState(false);

    const blocker = useBlocker(({ currentLocation, nextLocation }) => {
        return isFilled && currentLocation.pathname !== nextLocation.pathname;
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        setIsFilled(true);
    }
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        setIsFilled(true);
    }

    const handleUploading = () => {
        // todo: 게시물 수정 api
    };

    const handlePartClick = (partName: string) => {
        setSelectedPart((prev) => (prev === partName ? null : partName));
        setIsFilled(true);
    };

    return (
        <main>
            <div css={container}>
                <div css={contentContainer}>
                    <div css={contentTitle}>
                        게시물 수정하기
                        <PotIcon css={iconStyle} />
                        <div css={buttonContainer}>
                            <PotButton onClick={() => { }} type="red">삭제하기</PotButton>
                            <Button variant="action" onClick={handleUploading}>
                                수정 완료
                            </Button>
                        </div>
                    </div>

                    <div css={contentBody}>
                        <input
                            css={inputStyle}
                            placeholder="메인 제목 작성"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <textarea
                            css={textareaStyle}
                            placeholder="나의 열정을 이야기해봐요"
                            value={content}
                            onChange={handleContentChange}
                        />
                        <div css={categoryContainer}>
                            카테고리
                            <div css={categories}>
                                {Object.keys(partMap).map((partName) => (
                                    <div key={partName} css={categories}>
                                        <CategoryButton
                                            style={partMap[partName]}
                                            selected={selectedPart === partName}
                                            onClick={() => handlePartClick(partName)}
                                        >
                                            {partName}
                                        </CategoryButton>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {blocker.state === "blocked" && (
                <Modal
                    title="페이지를 나가시겠어요?"
                    message="입력한 내용을 처음부터 시작해야 해요."
                    onConfirm={blocker.proceed}
                    onCancel={blocker.reset}
                />
            )}
        </main>
    );
}
export default EditPost;