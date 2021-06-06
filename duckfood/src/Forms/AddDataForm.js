import React, { useState } from 'react'

const AddDataForm = ( props ) => {
    
    const initData = { id: null, name: '', time: '', foodType: '', location: '', numberOfDucks: '', foodAmount: ''}

    const [ user, setUser ] = useState(initData)

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
            <button className="button-warning" type="submit">Add Data</button>
        </form>
    )
}

export default AddDataForm