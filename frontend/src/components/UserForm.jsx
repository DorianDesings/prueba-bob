import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Bags from './Bags';

const UserForm = () => {
    //State
    const [user, setUser] = useState({ name: '', bags: 2 })

    //History
    const history = useHistory()

    const handleBags = (e) => {
        if (e === 'subtraction' && user.bags >= 2) {
            let newBags = user.bags - 1
            setUser({ ...user, bags: newBags })
        } else if (e === 'add' && user.bags <= 4) {
            let newBags = user.bags + 1
            setUser({ ...user, bags: newBags })
        }
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleBack = () => history.goBack()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/addUser', { name: user.name, bags: user.bags })
        history.goBack()
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <label htmlFor="name" className="form__label">Name</label>
                <input type="text" id="name" className="form__name" name="name" onChange={handleChange} />

            </div>
            <div className="form__field">
                <Bags numberOfBags={user.bags} changeBags={handleBags} />
            </div>
            <div className="form__field">
                <input type="submit" className="form__submit" />
            </div>
            <div className="form__field">
                <input type="button" className="form__cancel" value="Cancel" onClick={handleBack} />
            </div>
        </form>
    )

}

export default UserForm