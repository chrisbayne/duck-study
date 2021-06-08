import React, { useState } from 'react'
import userDataList from './data'
import UserDataTable from './Tables/UserDataTable'
import AddDataForm from './Forms/AddDataForm'
import EditDataForm from './Forms/EditDataForm'
import './Styles/styles.css'

const App = () => {

  const [ users, setUsers ] = useState( userDataList )

  // By using setUsers, the addData function puts an object containing a
  // new user data set into the users array which is being passed to the AddUser component.
  // A new ID is set based on the current number (+ 1) of user data sets each time a data set is submitted 
  // The spread operator keeps the current user array the same.
  const addData =  user  => {
      console.log(user)
    user.id = users.length + 1
    setUsers([...users, user])
  }

  // Filters over the user data array to filter out the user that has
  // the id of the data set to be deleted.
  const deleteData = ( id ) => setUsers( users.filter( user => user.id !== id) )

  // Checking to see if the user is currently editing a data set and decide which data set is 
  // currently being edited.
  // Initially set to false so that Adding Data is the primary function.
  const [ editing, setEditing ] = useState( false )

  const initialData = { id: null, name: '', time: '', foodType: '', location: '', numberOfDucks: '', foodAmount: '' }

  const [ currentData, setCurrentData ] = useState( initialData )

  const editData = ( id, user ) => {
      setEditing( true )
      setCurrentData( user )
  }

  const updateData = ( newData ) => {
      setUsers( users.map( ( user ) => ( user.id === currentData.id ? newData : user )))
  }

  return (
    <div className="background-color">
        <div className="logo"></div>
        <div className="background-banner"></div>
            <div className="container">
                <div className="row">
                <div className="five columns">
                    {/* Shows the EditData or AddData form based on the editing state */}
                    { editing ? (
                    <div>
                        <h2 className="submit-edit-data-title">Edit Data</h2>
                        <EditDataForm 
                        currentData={ currentData }
                        setEditing={ setEditing }
                        updateData={ updateData } />
                    </div>
                    ) : (
                    <div>
                        <h2 className="submit-edit-data-title">Submit Data</h2>
                        <AddDataForm 
                        addData={ addData } />
                    </div>
                )}
                </div>
                <div className="seven columns">
                    <h2 className="view-data-title">View Data</h2>
                    <UserDataTable 
                    users={ users } 
                    deleteData={ deleteData }
                    editData={ editData } />
                </div>
                </div>
            </div>
        
    </div>
  )
}

export default App
