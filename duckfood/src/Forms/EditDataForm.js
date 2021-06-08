import React, { useState, useEffect } from 'react'

const EditDataForm = ( props ) => {

    const [ user, setUser ] = useState( props.currentData )

    const handleInputChange = e => {
        const { name, value } = e.target
        setUser({...user, [ name ]: value})
    }

    // Sending the updated user data sets back to App.js.
    const handleSubmit = e => {
        e.preventDefault()
        if ( user.name && user.time && user.foodType && user.location && user.numberOfDucks && user.foodAmount ) props.updateData( user )
    }
    // Allows the user to change which data set to edit while editing another.
    // When the component rerenders, the props are updated.
    useEffect(() => {
        setUser( props.currentData )
    }, [props])

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
                defaultValue={ user.foodType } 
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
                defaultValue={ user.numberOfDucks } 
                onChange={ handleInputChange } 
            />
            <label>Food Amount</label>
            <input 
                className="u-full-width" 
                type="text" name="foodamount" 
                placeholder="Food Amount (in Lbs)" 
                defaultValue={ user.foodAmount } 
                onChange={ handleInputChange } 
            />
            <button 
                className="button-warning" 
                type="submit" 
                onClick={ handleSubmit }>Edit Data Set
            </button>
            <button 
                type="submit" 
                onClick={() => props.setEditing( false ) }>Cancel
            </button>
        </form>
    )
}

export default EditDataForm