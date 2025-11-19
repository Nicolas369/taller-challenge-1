import type { Transaction } from "../definitions/TransactionDefinitions";

export function fetchUserTransaction(): Promise<Transaction[]> {
    const pageSide = 25;
    return new Promise((resolve) => {
        const transactionList = generateTransactionsList(pageSide);
        setTimeout(() => resolve(transactionList), 500);
    });
}

function generateTransactionsList(count = 1000) {
  const transactions = [];

  for (let i = 0; i < count; i++) {
    transactions.push({
      id: `TX-${i + 1}-${Math.random().toString(36).slice(2, 8)}`,
      date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      description: 'transaction description',
      amountUSD: (Math.random() * 500).toFixed(2)
    });
  }

  return transactions;
}
