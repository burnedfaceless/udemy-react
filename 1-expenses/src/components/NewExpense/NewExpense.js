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

  const toggleShowForm = () => {
    props.toggleShowForm()
  }

  if (!props.showForm) {
    return (
        <div className='new-expense'>
          <button onClick={toggleShowForm}>Show Form</button>
        </div>
    )
  }

  return (
      <div className='new-expense'>
        <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            toggleShowForm={toggleShowForm}
        />
      </div>
  )
}

export default NewExpense