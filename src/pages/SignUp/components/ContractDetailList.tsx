import { normalTextStyle, orderedListItemStyle, unorderedListItemStyle } from "./ContractDetailList.style";

interface ContractDetailListProps {
    contracts: { content: string, childContracts: string[], bullet: boolean, value?: number }[];
}

const ContractDetailList: React.FC<ContractDetailListProps> = ({ contracts }: ContractDetailListProps) => {
    return (
        <ol>
            {contracts.map((contract) =>
                <>
                    <li css={contract.bullet ? orderedListItemStyle : normalTextStyle} value={contract.value}>{contract.content}</li>
                    <ul >
                        {contract.childContracts.map((childContract) =>
                            <li css={unorderedListItemStyle}><span>{childContract}</span></li>
                        )}
                    </ul>
                </>
            )}
        </ol>
    )
}
export default ContractDetailList;