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
                <ExpensesItem title={data[0].title} date={data[0].date} amount={data[0].amount}></ExpensesItem>
                <ExpensesItem title={data[1].title} date={data[1].date} amount={data[1].amount}></ExpensesItem>
                <ExpensesItem title={data[2].title} date={data[2].date} amount={data[2].amount}></ExpensesItem>
                <ExpensesItem title={data[3].title} date={data[3].date} amount={data[3].amount}></ExpensesItem>
            </Card>
        </div>
    )
}

export default Expenses;