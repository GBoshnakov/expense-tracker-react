import './AddExpenseButton.css';

function AddExpenseButton(props) {

    return <div className="new-expense__controls">
        <button className="new-expense__actions" onClick={props.onShowForm}>Add new expense</button>
    </div>
}

export default AddExpenseButton;