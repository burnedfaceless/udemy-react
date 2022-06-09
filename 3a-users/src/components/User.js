import React from 'react'
import './User.css'

const User = props => {
  const age = parseInt(props.user.age)
  const text = (age === 1) ? ' Year Old' : ' Years Old'
  return (
      <div className='user'>{props.user.username} ({age}{text})</div>
  )
}

export default User