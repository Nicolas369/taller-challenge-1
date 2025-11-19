import type { Transaction } from "../definitions/TransactionDefinitions";

export default function TransactionComponent({ transaction }: {transaction: Transaction}) {
    return (
        <li key={transaction.id} className="transaction-container center-elements space-elements_between">
            <span>{transaction.id}</span>
            <h4 className="transaction-description">
                { transaction.description }
            </h4>
            <ul className="transaction-details">
                <li>
                    <span>amount: ${ transaction.amountUSD } USD</span>
                </li>
                <li>
                    <span>date: { transaction.date }</span>
                </li>
            </ul>
        </li>
    );
}
