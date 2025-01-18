import { applicantInfoContainer, applicantInfoDiscriptionStyle, applicantInfoTitleButtonContaienr, applicantInfoTitleContaienr, applicantInfoTitleIconStyle, applicantInfoTitleStyle, applicantInfoTopContainer, applicantListConaitner, bodyContainerStyle, containerStyle, contentStyle, dividerStyle, editButtonContainerStyle, infoContainerStyle, infoContentStyle, infoElementContainerStyle, infoTitleStyle, leftButtonIconStyle, leftButtonStyle, modalBackgroundStyle, nicknameStyle, profileContainerStyle, profileStyle, sectionContainerStyle, titleContainerStyle, titleContentConatinerStyle, titleStyle } from "./PotDetail.style";
import { MushRoomProfile } from "@assets/images";
import { LeftIcon, PotIcon } from "@assets/svgs";
import Modal from "@components/commons/Modal/Modal";
import { ApplicantCard, DdayBadge } from "@components/index";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PotDetail = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [applied, setApplied] = useState<boolean>(true)
    const [myPot, setMyPot] = useState<boolean>(true)
    const [applicantExists, setApplicantExists] = useState<boolean>(true)
    const navigate = useNavigate();
    const { potId } = useParams();

    const handleBack = () => {
        navigate(-1);
    }
    const handleCancelReservation = () => {
        setShowModal(true);
    }
    const handleApply = () => {

    }
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }

    const handleModalConfirm = () => {
        setApplied(false);
        setShowModal(false);
    }
    const handleModalCancel = () => {
        setShowModal(false);
    }

    return (
        <main css={containerStyle}>
            <div css={bodyContainerStyle}>
                <div css={sectionContainerStyle}>
                    <div css={titleContainerStyle}>
                        <button css={leftButtonStyle} onClick={handleBack}>
                            <LeftIcon css={leftButtonIconStyle} />
                        </button>
                        <div css={titleContentConatinerStyle}>
                            <h1 css={titleStyle}>AI 자동화 챗봇 어플 공부할 스터디원 모집</h1>
                            {!myPot && applied && <button onClick={handleCancelReservation}>취소하기</button>}
                            {!myPot && !applied && <button onClick={handleApply}>이 팟에 지원하기</button>}
                            {myPot &&
                                <div css={editButtonContainerStyle}>
                                    <button onClick={handleEdit}>수정</button>
                                    <button onClick={handleDelete}>삭제</button>
                                </div>}
                        </div>
                    </div>
                    <div css={profileContainerStyle}>
                        <img css={profileStyle} src={MushRoomProfile} />
                        <p css={nicknameStyle}>아아 마시는 버섯</p>
                        <DdayBadge days={5} />
                    </div>
                    <div css={dividerStyle} />
                </div>
                <div css={sectionContainerStyle}>
                    <div css={infoContainerStyle}>
                        <div css={infoElementContainerStyle}>
                            <div css={infoElementContainerStyle}>
                                <p css={infoTitleStyle}>시작 날짜</p>
                                <p css={infoContentStyle}>2025.2.18</p>
                            </div>
                            <div css={infoElementContainerStyle}>
                                <p css={infoTitleStyle}>예상 기간</p>
                                <p css={infoContentStyle}>단기/3개월</p>
                            </div>
                            <div css={infoElementContainerStyle}>
                                <p css={infoTitleStyle}>진행 방식</p>
                                <p css={infoContentStyle}>온라인</p>
                            </div>
                        </div>
                        <div css={infoElementContainerStyle}>
                            <p css={infoTitleStyle}>모집 분야</p>
                            <p css={infoContentStyle}>프론트엔드(2), 디자이너(3)</p>
                        </div>
                        <div css={infoElementContainerStyle}>
                            <p css={infoTitleStyle}>사용 언어</p>
                            <p css={infoContentStyle}>React, Javascripts</p>
                        </div>
                    </div>
                    <div css={dividerStyle} />
                </div>
                <p css={contentStyle}>안녕하엣</p>
            </div>
            {applicantExists && <div css={dividerStyle} />}
            {applicantExists && 
                <div css={applicantInfoContainer}>
                    <div css={applicantInfoTopContainer}>
                        <div css={applicantInfoTitleButtonContaienr}>
                            <div css={applicantInfoTitleContaienr}>
                                <h1 css={applicantInfoTitleStyle}>나의 팟 지원자가 총 3명 있어요</h1>
                                <PotIcon css={applicantInfoTitleIconStyle}/>
                            </div>
                            <button>팟 시작하기</button>
                        </div>
                        <p css={applicantInfoDiscriptionStyle}>함께하고 싶은 지원자를 체크하고, 팟 시작하기를 누르면 팟이 시작돼요. </p>
                    </div>
                    <div css={applicantListConaitner}>
                        <ApplicantCard selected={false} profileImage={MushRoomProfile} nickname="아아 마시는 버섯" onClickMore={()=>{}} onSelect={()=>{}} />
                        <ApplicantCard selected={false} profileImage={MushRoomProfile} nickname="아아 마시는 버섯" onClickMore={()=>{}} onSelect={()=>{}} />
                        <ApplicantCard selected={false} profileImage={MushRoomProfile} nickname="아아 마시는 버섯" onClickMore={()=>{}} onSelect={()=>{}} />
                    </div>
                </div>}
            
            {showModal &&
                <div css={modalBackgroundStyle}>
                    <Modal title="지원을 취소하시겠어요?"
                        message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
                        onConfirm={handleModalConfirm}
                        onCancel={handleModalCancel} />
                </div>}
        </main>
    )
}

export default PotDetail;