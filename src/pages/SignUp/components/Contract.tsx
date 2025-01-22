import { container, detailButtonStyle, contractStyle } from "./Contract.style"

interface ContractProps {
    agreed: boolean,
    preview: string,
    title: string,
    content: string,
    onShowDetail: () => void,
    onCheck: () => void,
}

const Contract: React.FC<ContractProps> = ({ agreed, preview, title, content, onShowDetail, onCheck }: ContractProps) => {
    return (
        <div css={container}>
            <button onClick={onCheck}></button>
            <p css={contractStyle}>{preview}</p>
            <button css={detailButtonStyle} onClick={onShowDetail}>내용보기</button>
        </div>
    )
}
export default Contract;