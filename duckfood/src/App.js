import React from 'react'
import userDataList from './data'
import UserDataTable from './Tables/UserDataTable'

const App = () => {

  const [users, setUsers] = useState(userDataList)

  // By using setUsers, the addUser function puts an object containing a 
  // new user into the users array which is being passed to the AddUser component.
  // The spread operator keeps the current user array the same.
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>A Review of Duck Nutrition</h1>
      <div className="row">
        <div className="five columns">
          <h2>Submit Data</h2>
        </div>
        <div className="seven columns">
          <h2>View Data</h2>
          <UserDataTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App
