import { listItemStyle, orderedListStyle, unOrderedListStyle } from "./ContractDetailList.style";

interface ContractDetailListProps {
    contracts: { content: string, childContracts: string[], style?: "normal" | "none", value?: number }[];
}

const ContractDetailList: React.FC<ContractDetailListProps> = ({ contracts }: ContractDetailListProps) => {
    return (
        <ol css={orderedListStyle} start={1}>
            {contracts.map((contract) =>
                <>
                    <li css={listItemStyle(contract.style)} value={contract.value}>{contract.content}</li>
                    <ul css={unOrderedListStyle}>
                        {contract.childContracts.map((childContract) =>
                            <li css={listItemStyle(contract.style)}>{childContract}</li>
                        )}
                    </ul>
                </>
            )}
        </ol>
    )
}
export default ContractDetailList;