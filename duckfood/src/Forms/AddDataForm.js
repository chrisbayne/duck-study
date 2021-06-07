import React, { useState } from 'react'

const AddDataForm = ( props ) => {
    
    // Initialize data
    const initData = { id: null, name: '', time: '', foodType: '', location: '', numberOfDucks: '', foodAmount: ''}

    const [ user, setUser ] = useState( initData )

    // Destructing off of the properties of the event.target object.
    // Dynamically setting object keys based on the input field.
    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [ name ]: value })
    }

    // Preventing the default page refresh and checking to see if the users name
    // and location have been filled in.
    // Passing the addData function as a callback after the handleChange is finished. 
    const handleSubmit = e => {
        e.preventDefault()
        if ( user.name && user.time && user.foodType && user.location && user.numberOfDucks && user.foodAmount ) {
            handleChange( e, props.addData( user ) )
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" placeholder="First Name" defaultValue={ user.name } onChange={ handleChange } />
            <label>Time</label>
            <input className="u-full-width" type="text" name="time" placeholder="24h Time format (ie. 18:20)" defaultValue={ user.time } onChange={ handleChange } />
            <label>Type of Food</label>
            <input className="u-full-width" type="text" name="foodtype" placeholder="Type of Food" defaultValue={ user.foodType } onChange={ handleChange } />
            <label>Location</label>
            <input className="u-full-width" type="text" name="location" placeholder="Location" defaultValue={ user.location } onChange={ handleChange } />
            <label>Number of Ducks</label>
            <input className="u-full-width" type="text" name="numberofducks" placeholder="Number of ducks" defaultValue={ user.numberOfDucks } onChange={ handleChange } />
            <label>Food Amount</label>
            <input className="u-full-width" type="text" name="foodamount" placeholder="Food Amount" defaultValue={ user.foodAmount } onChange={ handleChange } />
            <button className="button-warning" type="submit" onClick={ handleSubmit }>Add Data Set</button>
        </form>
    )
}

export default AddDataForm