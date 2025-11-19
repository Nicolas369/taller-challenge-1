import { useEffect, useMemo, useState } from "react";
import "../styles/TransactionListStyles.css";
import { fetchUserTransaction } from "../api/transactionApi";
import { Alert } from "../components/AlertComponent";
import DateFilterBarComponent from "../components/DateFilterBarComponent";
import TransactionComponent from "../components/TransactionComponent";
import type { Transaction } from "../definitions/TransactionDefinitions";

export function filterByDate(
  items: Transaction[],
  start: string,
  end: string
): Transaction[] {
  const startDate = start ? new Date(start).getTime() : 0;
  const endDate = end ? new Date(end).getTime() : Infinity;

  return items.filter((item) => {
    const time = new Date(item.date).getTime();
    return time >= startDate && time <= endDate;
  });
}

export default function TransactionList() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [filterT, setFilterT] = useState({ start: "", end: "" });

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const requestTransactions = async () => {
      try {
        const response = await fetchUserTransaction();
        setTransactions([...transactions, ...response]);
      } catch (error) {
        setError(true);
      }
    };

    requestTransactions();
  }, []);

  const handleFilter = (start: string, end: string) => {
    setFilterT({ start, end });
  };

  const handleClearFilter = () => {
    setFilterT({ start: "", end: "" });
  };

  const transactionToDisplay = useMemo(() => {
    return filterByDate(transactions, filterT.start, filterT.end);
  }, [transactions, transactions.length, filterT.start, filterT.end]);

  return (
    <section className="transaction-list-main-section">
      <div>
        <header className="transaction-list-header">
          <h2 className="transaction-list-title">Transaction List</h2>

          <DateFilterBarComponent
            clearFilter={handleClearFilter}
            onFilter={handleFilter}
          />
        </header>

        <ul className="transaction-list">
          {transactionToDisplay.map((t: Transaction) => (
            <TransactionComponent transaction={t} />
          ))}
        </ul>

        {error && <Alert type="error" message="Something went wrong." />}
      </div>
    </section>
  );
}
