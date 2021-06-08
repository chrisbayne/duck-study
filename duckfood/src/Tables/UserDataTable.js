import React from 'react'

const UserDataTable =  ( props ) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Time Fed</th>
                    <th>Type of Food</th>
                    <th>Location</th>
                    <th>Number of Ducks</th>
                    <th>Amount of Food</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* Basic table to loop over the user data submissions received by App.js through props */}
                {/* Using ternary operator to return data immediately */}
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, time, foodtype, location, numberofducks, foodamount } = user
                        return (
                            <tr>
                                <td>{ id }</td>
                                <td>{ name }</td>
                                <td>{ time }</td>
                                <td>{ foodtype }</td>
                                <td>{ location }</td>
                                <td>{ numberofducks }</td>
                                <td>{ foodamount }</td>
                                <td>
                                    {/* Filtering over the submitted data sets array to filter out the data set that has
                                    the ID of the data set to be deleted */}
                                    <button onClick={() => props.deleteData( id )}>Delete</button>
                                    <button onClick={() => props.editData( id, user )}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                    // Error handling: If there is no data found, display a message.
                ) : (
                    <tr>
                        <td colSpan={ 4 }>No data found or submitted</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    )
}

export default UserDataTable