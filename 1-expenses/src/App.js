import ExpenseItem from "./components/ExpenseItem"
import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 7.99,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    }
  ]

  return (
      <div>
        <h2>Let's get started!</h2>
        <Expenses expenses={expenses} />
      </div>
  )
}

export default App