import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import AddExpenseButton from "./AddExpenseButton";
import './NewExpense.css';

function NewExpense(props) {

    const [showForm, setShowForm] = React.useState(false);

    function dataEventHandler(dataExpense) {

        const newExpense = {
            ...dataExpense,
            id: Math.random().toString()
        }

        props.onAddExpense(newExpense);
        setShowForm(false);

    }

    function showFormHandler() {
        setShowForm(true);
    }

    function hideFormHandler() {
        setShowForm(false);
    }

    if (!showForm) {
        return <div className="new-expense">
            <AddExpenseButton onShowForm={showFormHandler} />
        </div>
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onData={dataEventHandler} onHideForm={hideFormHandler}/>
        </div>
    )
}

export default NewExpense;