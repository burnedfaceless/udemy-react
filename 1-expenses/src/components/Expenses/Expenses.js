import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'


const Expenses = props => {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)



  const onSelectYear = year => {
    setFilteredYear(year)
  }

  let expensesContent = <p>No Expenses Found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(item => {
      return (
          <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
              key={item.id}
          />
      )
    })
  }

  return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter
              selected={filteredYear}
              onSelectYear={onSelectYear}
          />
          {expensesContent}
        </Card>
      </div>

  )
}

export default Expenses