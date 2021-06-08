import React, { useState, useEffect } from 'react'

const AddDataForm = ( props ) => {
    
    // Creating an object literal with data values set to empty strings.
    const initialData = { 
        id: null, 
        name: '', 
        time: '', 
        foodtype: '', 
        location: '', 
        numberofducks: '', 
        foodamount: '' 
    }

    const [ user, setUser ] = useState( initialData )

    // Destructing off of the properties of the event.target object.
    // Dynamically setting object keys based on the input fields.
    const handleInputChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [ name ]: value })
    }

    // Preventing the default page refresh and checking to see if all data
    // fields have been filled in.
    // Passing the addData function as a callback after the handleChange is finished. 
    const handleSubmit = e => {
        e.preventDefault()
        if ( user.name && user.time && user.location ) {
            handleInputChange( e, props.addData( user ) )
        }

        // Pop up alert to present the user with the submitted data set
        alert(`Data Submitted:\n
        Name : ${user.name}
        Time : ${user.time}
        Type of Food : ${user.foodtype}
        Location : ${user.location}
        Number of Ducks : ${user.numberofducks}
        Amount of Food : ${user.foodamount}
        `)
    }

    return (
        <form>
            <label>Name</label>
            <input 
                className="u-full-width" 
                type="text" 
                name="name" 
                placeholder="First Name" 
                defaultValue={ user.name } 
                onChange={ handleInputChange } 
            />
            <label>Time</label>
            <input 
                className="u-full-width" 
                type="text" 
                name="time" 
                placeholder="24h Time format (ie. 18:20)" 
                defaultValue={ user.time } 
                onChange={ handleInputChange } 
            />
            <label>Type of Food</label>
            <input 
                className="u-full-width" 
                type="text" 
                name="foodtype" 
                placeholder="Type of Food" 
                defaultValue={ user.foodtype } 
                onChange={ handleInputChange } 
            />
            <label>Location</label>
            <input 
                className="u-full-width" 
                type="text" 
                name="location" 
                placeholder="Location (City, Country)" 
                defaultValue={ user.location } 
                onChange={ handleInputChange } 
            />
            <label>Number of Ducks</label>
            <input 
                className="u-full-width" 
                type="text" 
                name="numberofducks" 
                placeholder="Number of ducks" 
                defaultValue={ user.numberofducks } 
                onChange={ handleInputChange } 
            />
            <label>Food Amount</label>
            <input 
                className="u-full-width" 
                type="text" 
                name="foodamount" 
                placeholder="Food Amount (in Lbs)" 
                defaultValue={ user.foodamount } 
                onChange={ handleInputChange } 
            />
            <button 
                className="button-warning" 
                type="submit" 
                onClick={ handleSubmit }>Add Data Set
            </button>
        </form>
    )
}

export default AddDataForm