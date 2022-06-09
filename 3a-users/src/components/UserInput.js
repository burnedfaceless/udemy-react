import React, { useState } from 'react'
import Card from './ui/Card'
import './UserInput.css'

const UserInput = props => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  const onUsernameHandler = e => {
    setUsername(e.target.value)
  }

  const onAgeHandler = e => {
    setAge(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    const user = {}
    if (username.trim() === '' || age.trim() === '') {
      return props.setEmptyModalDisplay(true)
    }
    if (parseInt(age) < 1) {
      return props.setNegativeModalDisplay(true)
    }
    user.username = username
    user.age = age
    props.addUser(user)
    setUsername('')
    setAge('')
  }

  return (
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input
              id='username'
              className='form-input'
              type='text'
              name='username'
              value={username}
              onChange={onUsernameHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
              id='age'
              className='form-input'
              type='number'
              name='age'
              value={age}
              onChange={onAgeHandler}
          />
          <button type='submit'>Add User</button>
        </form>
      </Card>
  )
}

export default UserInput