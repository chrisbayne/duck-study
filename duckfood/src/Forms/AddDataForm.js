import React, { useState } from 'react'

const AddDataForm = ( props ) => {
    
    const initData = { id: null, name: '', time: '', foodType: '', location: '', numberOfDucks: '', foodAmount: ''}

    const [ user, setUser ] = useState(initData)

    // Destructing off of the properties of the event.target object.
    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [ name ]: value })
    }

    // Preventing the default page refresh and checking to see if the users name
    // and location have been filled in. 
    const handleSubmit = e => {
        e.preventDefault()
        if ( user.name && user.location ) {
            handleChange( e, props.addData(data) )
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name="name" value={ user.name } />
            <label>Time</label>
            <input className="u-full-width" type="text" name="time" value={ user.time } />
            <label>Type of Food</label>
            <input className="u-full-width" type="text" name="food type" value={ user.foodType } />
            <label>Location</label>
            <input className="u-full-width" type="text" name="location" value={ user.location } />
            <label>Number of Ducks</label>
            <input className="u-full-width" type="text" name="number of ducks" value={ user.numberOfDucks } />
            <label>Food Amount</label>
            <input className="u-full-width" type="text" time="food amount" value={ user.foodAmount } />
            <button className="button-warning" type="submit" onClick= { handleSubmit }>Add Data</button>
        </form>
    )
}

export default AddDataForm