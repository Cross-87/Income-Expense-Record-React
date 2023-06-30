import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2);


    const expense = amounts
                    .filter(item => item < 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2);

  return (
    <div className="my-3">
        <div className="flex justify-between my-2 px-2">
            <h4>Income</h4>
            <p className="underline underline-offset-4 decoration-green-400">{income}</p>
        </div>
        <div className="flex justify-between my-2 px-2">
            <h4>Expense</h4>
            <p className="underline underline-offset-4 decoration-red-400">{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses