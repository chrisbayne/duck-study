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
        if ( user.name && user.location ) {
            handleChange( e, props.addData( data ) )
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" value={ user.name } onChange={ handleChange } />
            <label>Time</label>
            <input className="u-full-width" type="text" name="time" value={ user.time } onChange={ handleChange } />
            <label>Type of Food</label>
            <input className="u-full-width" type="text" name="food type" value={ user.foodType } onChange={ handleChange } />
            <label>Location</label>
            <input className="u-full-width" type="text" name="location" value={ user.location } onChange={ handleChange } />
            <label>Number of Ducks</label>
            <input className="u-full-width" type="text" name="number of ducks" value={ user.numberOfDucks } onChange={ handleChange } />
            <label>Food Amount</label>
            <input className="u-full-width" type="text" time="food amount" value={ user.foodAmount } onChange={ handleChange } />
            <button className="button-warning" type="submit" onClick={ handleSubmit }>Add Data</button>
        </form>
    )
}

export default AddDataForm