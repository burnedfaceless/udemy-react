import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import {useState} from "react";


const Expenses = props => {

  const expenseItems = props.expenses.map((item, index) => {
    return (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={index}
        />
    )
  })

  const [filteredYear, setFilteredYear] = useState('2020')

  const onSelectYear = year => {
    setFilteredYear(year)
  }

  return (
      <div>
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onSelectYear={onSelectYear} />
          {expenseItems}
        </Card>
      </div>

  )
}

export default Expenses