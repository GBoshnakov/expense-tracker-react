import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

function NewExpense (props) {

    function dataEventHandler (dataExpense) {
        const newExpense = {
            ...dataExpense,
            id: Math.random().toString()
        }

        props.onAddExpense(newExpense);
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onData={dataEventHandler} />
        </div>
    )
}

export default NewExpense;