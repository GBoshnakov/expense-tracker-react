import React from 'react';
import './Expenses.css';
import ExpensesItem from './ExpensesItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

function Expenses(props) {

    const [dateFilter, setDateFilter] = React.useState('2020');

    const data = props.data.filter(expense => expense.date.getFullYear().toString() === dateFilter);

    function dateFilterHandler(selectedYear) {

        setDateFilter(selectedYear);
        console.log('filtering ' + selectedYear + ' expenses');
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={dateFilter} onDateChange={dateFilterHandler} />
                {data.map(expense => (
                    <ExpensesItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id} />
                ))};
            </Card>
        </div>
    )
}

export default Expenses;