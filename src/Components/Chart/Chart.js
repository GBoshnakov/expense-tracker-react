import React from "react";
import ChartBar from './ChartBar.js';
import './Chart.css'

function Chart(props) {
    const arrValues = props.expensesDataPoints.map(expense => expense.value)
    const maxExpense = Math.max(...arrValues);
    return (
        <div className="chart" >
            {props.expensesDataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.month}
                    value={dataPoint.value}
                    maxValue={maxExpense}
                    month={dataPoint.month} />))}
        </div>
    )
}

export default Chart;

