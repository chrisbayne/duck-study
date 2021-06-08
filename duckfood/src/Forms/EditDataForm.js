import React, { useState, useEffect } from 'react'

const EditDataForm = ( props ) => {

    const [ user, setUser ] = useState( props.currentData )

    const handleChange = e => {
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
            <input className="u-full-width" type="text" name="name" defaultValue={ user.name } onChange={ handleChange } />
            <label>Time</label>
            <input className="u-full-width" type="text" name="time" defaultValue={ user.time } onChange={ handleChange } />
            <label>Type of Food</label>
            <input className="u-full-width" type="text" name="food type" defaultValue={ user.foodType } onChange={ handleChange } />
            <label>Location</label>
            <input className="u-full-width" type="text" name="location" defaultValue={ user.location } onChange={ handleChange } />
            <label>Number of Ducks</label>
            <input className="u-full-width" type="text" name="number of ducks" defaultValue={ user.numberOfDucks } onChange={ handleChange } />
            <label>Food Amount</label>
            <input className="u-full-width" type="text" time="food amount" defaultValue={ user.foodAmount } onChange={ handleChange } />
            <button className="button-warning" type="submit" onClick={ handleSubmit }>Edit Data Set</button>
            <button type="submit" onClick={() => props.setEditing( false ) }>Cancel</button>
        </form>
    )
}

export default EditDataForm