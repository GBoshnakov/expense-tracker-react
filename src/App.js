import React from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_DB = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  },
];

function App() {

  const [expenses, setNewExpense] = React.useState(DUMMY_DB);

  function addExpenseHandler (newExpense) {
    setNewExpense((prevExpenses) => {
      return [...prevExpenses, newExpense]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
