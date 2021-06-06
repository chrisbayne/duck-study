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
                        const { id, name, time, foodType, location, numberOfDucks, foodAmount } = user
                        return (
                            <tr>
                                <td>{ id }</td>
                                <td>{ name }</td>
                                <td>{ time }</td>
                                <td>{ foodType }</td>
                                <td>{ location }</td>
                                <td>{ numberOfDucks }</td>
                                <td>{ foodAmount }</td>
                                <td>
                                    <button onClick={() => props.deleteData( id )}>Delete</button>
                                    <button>Edit</button>
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