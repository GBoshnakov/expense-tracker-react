import './Expenses.css';
import ExpensesItem from './ExpensesItem';
import Card from './Card';

function Expenses(props) {

    const data = props.data;
    return (
        <Card className='expenses'>
            <ExpensesItem title={data[0].title} date={data[0].date} amount={data[0].amount}></ExpensesItem>
            <ExpensesItem title={data[1].title} date={data[1].date} amount={data[1].amount}></ExpensesItem>
            <ExpensesItem title={data[2].title} date={data[2].date} amount={data[2].amount}></ExpensesItem>
            <ExpensesItem title={data[3].title} date={data[3].date} amount={data[3].amount}></ExpensesItem>
        </Card>
    )
}

export default Expenses;