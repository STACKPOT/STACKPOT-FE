import StateBadge from "@components/commons/Badge/StateBadge/StateBadge";
import { cardStyle, checkBoxStyle, nicknameStyle, profileImageStyle, statusContainer, todoContainer, todoListContainer, todoTextStyle } from "./MyPotTodoCard.style";
import { CheckIcon } from "@assets/svgs";

interface MyPotTodoCardProps {
    profileImage: string;
    nickname: string;
    status: string,
    statusColor: string,
    todos: { content: string, checked: boolean }[]
}

const MyPotTodoCard: React.FC<MyPotTodoCardProps> = ({ profileImage, nickname, status, statusColor, todos }: MyPotTodoCardProps) => {
    return (
        <div css={cardStyle}>
            <img css={profileImageStyle} src={profileImage} />
            <p css={nicknameStyle}>{nickname}</p>
            <div css={statusContainer}>
                <StateBadge content={status} color={statusColor} />
                <div css={todoListContainer}>
                    {todos.slice(0, 3).map((todo) =>
                        <div css={todoContainer}>
                            <div css={checkBoxStyle}>
                                {todo.checked && <CheckIcon />}
                            </div>
                            <p css={todoTextStyle}>{todo.content}</p>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default MyPotTodoCard;