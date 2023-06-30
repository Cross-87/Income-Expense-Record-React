/* eslint-disable react/prop-types */
import { useGlobalState } from "../../context/GlobalState"

export function TransactionItem({ transaction }) {
    const {deleteTransaction} = useGlobalState()

  return (
    <li className="border border-gray-400 text-white px-3 py-1 rounded-lg mb-1 w-full flex justify-between items-center">
        <p className="text-sm">{transaction.description}</p>
        <div>
            <span>${transaction.amount}</span>
            <button className="bg-red-500 px-2 py-1 rounded-lg ml-2 hover:bg-red-600 transition-all" onClick={() => {
                deleteTransaction(transaction.id)
            }}>
                X
            </button>
        </div>
    </li>
  )
}

export default TransactionItem