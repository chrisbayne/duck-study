import React from 'react'

const EditDataForm = ( props ) => {

    const [ user, setUser ] = useState( props.currentUser )

    const handleChange = e => {
        const { name, value } = e.target
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ( user.name && user.location ) props.updateUser( user )
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
            <button className="button-warning" type="submit" onClick={handleSubmit}>Edit Data</button>
            <button type="submit" onClick={() => props.setEditing( false ) }>Cancel</button>
        </form>
    )
}

export default EditDataForm