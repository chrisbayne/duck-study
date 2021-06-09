import React, { useState, useEffect } from 'react'
import '../Styles/styles.css'

const EditDataForm = ( props ) => {

    const [ user, setUser ] = useState( props.currentData )

    const handleInputChange = e => {
        const { name, value } = e.target
        setUser({...user, [ name ]: value})
    }

    // Sending the updated user data sets back to App.js.
    const handleSubmit = e => {
        e.preventDefault()
        if ( user.name && user.time && user.location ) props.updateData( user )
    }
    // Allows the user to change which data set to edit while editing another.
    // When the component rerenders, the props are updated.
    useEffect(() => {
        setUser( props.currentData )
    }, [props])

    return (
        <div className='main-container'>
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
                    type="text" name="foodamount" 
                    placeholder="Food Amount (in Lbs)" 
                    defaultValue={ user.foodamount } 
                    onChange={ handleInputChange } 
                />
                <button 
                    className="button-primary" 
                    type="submit" 
                    onClick={ handleSubmit }>Edit Data Set
                </button>
                <button 
                    className="button-primary"
                    type="submit" 
                    onClick={() => props.setEditing( false ) }>Cancel
                </button>
            </form>
        </div>
    )
}

export default EditDataForm