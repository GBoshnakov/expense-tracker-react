import './ExpensesItem.css';

function Expenses() {
    return (
        <div className='expense-item'>
            <div>
                March 4th
            </div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$280</div>
            </div>
        </div>)
}

export default Expenses;