import React from "react";
import './NewExpenseForm.css';

function NewExpenseForm () {

    const [title, setTitle] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [date, setDate] = React.useState('');


    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function amountChangehandler(event) {
        setAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }


    return (
        <form>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangehandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2000-01-01' max='2025-01-01'onChange={dateChangeHandler} />
                </div>

            </div>
            <div className="new-expense-__actions">
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
}

export default NewExpenseForm;