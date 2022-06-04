import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random()
    }
    props.onAddExpense(expenseData)
  }

  const [showForm, setShowForm] = useState(false)


  const makeFormVisible = () => {
    setShowForm(true)
  }

  const makeFormInvisible = () => {
    setShowForm(false)
  }

  if (!showForm) {
    return (
        <div className='new-expense'>
          <button onClick={makeFormVisible}>Show Form</button>
        </div>
    )
  }

  return (
      <div className='new-expense'>
        <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            makeFormInvisible={makeFormInvisible}
        />
      </div>
  )
}

export default NewExpense