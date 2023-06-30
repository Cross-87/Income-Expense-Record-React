import { GlobalProvider } from "./context/GlobalState"
import Header from "./components/Header"
import Balance from "./components/Balance"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import IncomeExpenses from "./components/IncomeExpenses"
import ExpenseChart from "./components/ExpenseChart"

function App() {
  return (
    <GlobalProvider>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white min-h-screen flex justify-center items-center">
        <div className="container mx-auto my-6 w-5/6 xl:w-3/6">
          <div className="bg-zinc-800 p-5 rounded-lg flex flex-col sm:p-10 lg:flex-row gap-x-4">
            <div className="flex flex-col flex-1">
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
              <ExpenseChart />
            </div>
            <div className="flex flex-col flex-1">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}
export default App