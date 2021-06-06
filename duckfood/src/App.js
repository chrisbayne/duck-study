import React, { useState } from 'react'
import userDataList from './data'
import UserDataTable from './Tables/UserDataTable'
import AddDataForm from './Forms/AddDataForm'
import EditDataForm from './Forms/EditDataForm'

const App = () => {

  const [ users, setUsers ] = useState( userDataList )

  // Checking to see if the user is currently editing and choose which user is 
  // currently being edited.
  const [ editing, setEditing ] = useState( false )

  const initialData = { id: null, name: '', time: '', foodType: '', location: '', numberOfDucks: '', foodAmount: '' }

  const [ currentData, setCurrentData ] = useState( initialData )

  // By using setUsers, the addData function puts an object containing a 
  // new user into the users array which is being passed to the AddUser component.
  //
  // A new ID is set based on the current number (+ 1) of user data sets each time a data set is submitted 
  // The spread operator keeps the current user array the same.
  const addData = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // Filters over the user data array to filter out the user that has
  // the id of the data set to be deleted.
  const deleteData = id => setUsers( users.filter( user => user.id !== id))

  return (
    <div className="container">
      <h1>A Review of Duck Nutrition</h1>
      <div className="row">
        <div className="five columns">
          <h2>Submit Data</h2>
          <AddDataForm addData={ addData } />
        </div>
        <div className="seven columns">
          <h2>View Data</h2>
          <UserDataTable users={ users } deleteData={ deleteData } />
        </div>
      </div>
    </div>
  )
}

export default App
