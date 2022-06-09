import './App.css'

import FlexboxContainer from './components/ui/FlexboxContainer'
import Users from './components/Users'
import { useState, Fragment } from 'react'
import UserInput from './components/UserInput'
import Modal from './components/ui/Modal'

const App = () => {
  const [users, setUsers] = useState([])
  const [displayEmptyModal, setEmptyModalDisplay] = useState(false)
  const [displayNegativeModal, setNegativeModalDisplay] = useState(false)

  const addUser = user => {
    setUsers(prevUsers => [...prevUsers, user])
    console.log(users)
  }

  return (
    <Fragment>
      <div className='container'>
        <h1 className='text-center'>User Bus</h1>
        <FlexboxContainer>
          <UserInput
              addUser={addUser}
              setEmptyModalDisplay={setEmptyModalDisplay}
              setNegativeModalDisplay={setNegativeModalDisplay}
          />
          <Users users={users} />
        </FlexboxContainer>
      </div>
      {displayEmptyModal &&
          <Modal
              title='Invalid Input'
              body='Please enter a valid name and age (non-empty values).'
              setModalDisplay={setEmptyModalDisplay}
          />
      }
      {displayNegativeModal &&
        <Modal
          title='Invalid Input'
          body='Please enter a valid age (> 0).'
          setModalDisplay={setNegativeModalDisplay}
        />
      }
    </Fragment>

  )
}

export default App
