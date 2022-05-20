import './Expenses.css'
import ExpenseItem from './ExpenseItem'

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

  return (
      <div className='expenses'>
        {expenseItems}
      </div>
  )
}

export default Expenses