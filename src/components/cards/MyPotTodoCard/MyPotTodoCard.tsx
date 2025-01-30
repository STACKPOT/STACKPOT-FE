import { cardStyle, checkBoxStyle, nicknameStyle, profileImageStyle, statusContainer, todoContainer, todoListContainer, todoTextStyle } from "./MyPotTodoCard.style";
import { CheckIcon } from "@assets/svgs";
import { MushRoomProfile } from "@assets/images"; 

interface TodoItem {
    content: string;
    status: "NOT_STARTED" | "COMPLETED"; 
}

interface MyPotTodoCardProps {
    nickname: string;
    todos: TodoItem[];
}

const MyPotTodoCard: React.FC<MyPotTodoCardProps> = ({ nickname, todos }) => {
    return (
        <div css={cardStyle}>
            <img css={profileImageStyle} src={MushRoomProfile} />
            <p css={nicknameStyle}>{nickname}</p>
            <div css={statusContainer}>
                <div css={todoListContainer}>
                    {todos.slice(0, 3).map((todo, index) => (
                        <div css={todoContainer} key={index}>
                            <div css={checkBoxStyle}>
                                {todo.status === "COMPLETED" && <CheckIcon />} 
                            </div>
                            <p css={todoTextStyle}>{todo.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyPotTodoCard;
