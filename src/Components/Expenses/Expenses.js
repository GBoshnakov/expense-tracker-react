import React from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {

    const data = props.data;
    const [dateFilter, setDateFilter] = React.useState('2020');

    function dateFilterHandler(selectedYear) {

        setDateFilter(selectedYear);
        console.log('filtering ' + selectedYear + ' expenses');
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={dateFilter} onDateChange={dateFilterHandler} />
                {data.map(expense => (<ExpensesItem title={expense.title} amount={expense.amount} date={expense.date} />))}
            </Card>
        </div>
    )
}

export default Expenses;