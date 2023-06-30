import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {
    const {transactions} = useGlobalState()

    const totalIncome = transactions
                                .filter(transaction => transaction.amount > 0)
                                .reduce((acc , transaction) => (acc += transaction.amount), 0);

    const totalExpense = transactions
                                .filter(transaction => transaction.amount < 0)
                                .reduce((acc , transaction) => (acc += transaction.amount), 0) * -1;
                                
    const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100);
    
    const totalIncomePercentage = 100 - totalExpensePercentage;

  return (
        <VictoryPie 
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                { x: "Expenses", y: totalExpensePercentage, label: `${totalExpensePercentage}% Expenses`},
                { x: "Incomes", y: totalIncomePercentage, label: `${totalIncomePercentage}% Incomes`},
            ]}
            animate={{
                duration: 200
            }}
            /* labels={({datum}) => `${datum.y}% ${datum.x}`} */
            /* cornerRadius={5}
            padAngle={1} */
            width={350}
            height={350}
            style={{
                data: {
                    stroke: "#222",
                    strokeWidth: 2,
                }}}
            /* innerRadius={20} */
            labelComponent={<VictoryLabel
                angle={45}
                style={{
                    fill: "white",
                }}
                textAnchor="middle"
                verticalAnchor="middle"
            />}
            
        />
    )
}

export default ExpenseChart