import { useParams } from "react-router-dom";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";

import { MypotFillIcon } from "@assets/svgs";
import { Button } from "@components/index";
import {
  boardStyle,
  boardTextStyle,
  highlightStyle,
  titleContainer,
} from "./StatusBar.style";
import { useState } from "react";
import MyTodoModal from "../MyTodoModal/MyTodoModal";

const StatusBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId) || 0;

  const { data } = useGetMyPotTodo({ potId: potIdNumber, page: 1, size: 1 });

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div css={boardStyle}>
      <div css={titleContainer}>
        <MypotFillIcon />
        <p css={boardTextStyle}>
          {data?.title}- 안녕하세요,
          <span css={highlightStyle}>{data?.nickname ?? ""}</span> 님! 오늘 할
          일이 <span css={highlightStyle}>{data?.taskCount ?? 0}</span>개
          있어요.
        </p>
      </div>
      <Button variant="cta" onClick={handleClick}>
        할 일 추가하기
      </Button>
      {isModalOpen && <MyTodoModal potId={potIdNumber} onClose={handleClose} />}
    </div>
  );
};

export default StatusBar;
