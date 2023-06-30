import { useGlobalState } from "../context/GlobalState"

function Balance() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

 /*    if (total >= 0) {
        document.getElementById("total").style.color = "#2ecc71"
    }
    else {
        document.getElementById("total").style.color = "#e74c3c"
    } */

    return (
        <div className="flex justify-between flex-col my-3 text-2xl sm:flex-row">
            <h3>Your Balance</h3>
            <h1 id="total" className="text-3xl font-bold">${total}</h1>
        </div>
    )
}

export default Balance