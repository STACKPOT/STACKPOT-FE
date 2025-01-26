import { listItemStyle, orderedListStyle, unOrderedListStyle } from "./ContractDetailList.style";

interface ContractDetailListProps {
    contracts: { content: string, childContracts: string[] }[];
}

const ContractDetailList: React.FC<ContractDetailListProps> = ({ contracts }: ContractDetailListProps) => {
    return (
        <ol css={orderedListStyle}>
            {contracts.map((contract) =>
                <>
                    <li css={listItemStyle}>{contract.content}</li>
                    <ul css={unOrderedListStyle}>
                        {contract.childContracts.map((childContract) =>
                            <li css={listItemStyle}>{childContract}</li>
                        )}
                    </ul>
                </>
            )}
        </ol>
    )
}
export default ContractDetailList;