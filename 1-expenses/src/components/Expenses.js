import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'

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
      <Card className='expenses'>
        {expenseItems}
      </Card>
  )
}

export default Expenses