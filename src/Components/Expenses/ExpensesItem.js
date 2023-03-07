import { useState } from 'react';

import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpensesItem(props) {

    const [title, setTitle] = useState(props.title);

    function eventHandler() {
        console.log(title)
        setTitle('Changed!');
    }


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={eventHandler}>Change title</button>
            </div>
        </Card>)
}

export default ExpensesItem;