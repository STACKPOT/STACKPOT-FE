import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetMyPotTodo from "apis/hooks/myPots/useGetMyPotTodo";
import { MyPotIcon } from "@assets/svgs";
import { boardStyle, boardTextStyle, highlightStyle, iconStyle } from "../../MyPotStatus/MyPotStatus.style";

const MyPotStatusHeader = () => {
  const { potId } = useParams<{ potId: string }>();
  const potIdNumber = Number(potId) || 0;

  const { data } = useGetMyPotTodo({ potId: potIdNumber, page: 1, size: 1 });

  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setCompletedCount(data?.todos?.[0]?.todos?.filter(todo => todo.status === "COMPLETED").length ?? 0);
  }, [data]); 

  return (
    <div css={boardStyle}>
      <MyPotIcon css={iconStyle} />
      <div css={boardTextStyle}>
        {data?.title ?? ""}- 안녕하세요, <span css={highlightStyle}>{data?.nickname ?? ""}</span> 님! 오늘 할 일이{" "}
        <span css={highlightStyle}>{(data?.taskCount ?? 0) - completedCount}</span>개 있어요.
      </div>
    </div>
  );
};

export default MyPotStatusHeader;
