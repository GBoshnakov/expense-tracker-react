import React from "react";
import './NewExpenseForm.css';

function NewExpenseForm (props) {

    const [title, setTitle] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [date, setDate] = React.useState('');

    // const [increment, setIncrement] = React.useState(1);



    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function amountChangehandler(event) {
        setAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    // function incrementHandler(event) {
    //     setIncrement((prev) => prev + 1)
    // }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }


    return (

        // <div>
        //     <div>{increment}</div>
        //     <button onClick={incrementHandler}>Increment</button>
        // </div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangehandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={date} min='2000-01-01' max='2025-01-01'onChange={dateChangeHandler} />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>

        </form>
    )
}

export default NewExpenseForm;