import TransactionList from "./TransactionList";
import "../styles/UserDashboardStyles.css"

export default function UserDashboard() {

    return (
        <main className="main-section display-column">
            <TransactionList />
        </main>
    );
}
