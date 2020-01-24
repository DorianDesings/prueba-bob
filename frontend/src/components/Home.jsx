import React, { useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Home = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await axios.get('http://localhost:4000')
        setUsers(res.data.allUsers)
    }

    const handleDelete = async (id) => {
        await axios.get(`http://localhost:4000/delete/${id}`)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="users">
            {
                users.map((user, idx) => (
                    <div key={idx} className="users__card" >
                        <p className="users__info"><FontAwesomeIcon icon={faUserTie} />{user.name}</p>
                        <p className="users__info"><FontAwesomeIcon icon={faLuggageCart} />{user.bags}</p>
                        <div className="users__buttons">
                            <Link to={`/${user._id}`}>
                                <button className="users__button users__button--update">Update</button>
                            </Link>

                            <button className="users__button users__button--delete" onClick={() => handleDelete(user._id)}>Delete</button>


                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default Home