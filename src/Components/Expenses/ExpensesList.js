import React from "react";
import ExpensesItem from "./ExpensesItem";
import './ExpensesList.css';

function ExpensesList(props) {

    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return <ul className="expenses-list">
        {props.data.map(expense => (
            <ExpensesItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id} />
        ))}
    </ul>
}

export default ExpensesList;