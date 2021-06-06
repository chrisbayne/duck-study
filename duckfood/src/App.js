import React from 'react'
import userDataList from './data'
import UserDataTable from './Tables/UserDataTable'

const App = () => {

  const [users, setUsers] = useState(userDataList)

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
