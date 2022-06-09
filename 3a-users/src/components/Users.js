import React from 'react'

import Card from './ui/Card'
import User from './User'

const Users = props => {
  if (props.users.length === 0) {
    return (
        <Card>
          <h2>No Users Found</h2>
          <p>No users have been added. Maybe try adding some?</p>
        </Card>
    )
  }
  const users = props.users.map((user, key) => <User user={user} key={key} />)
  return (
      <Card>
        {users}
      </Card>
  )
}

export default Users