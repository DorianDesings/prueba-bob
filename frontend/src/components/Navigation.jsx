import React from 'react';
import {
    Link
} from "react-router-dom";

const Navigation = () => (
    <ul className="menu">
        <li className="menu__item">
            <Link to="/"><img className="logo" src="logo.png" alt="" /></Link>
        </li>
        <li>
            <Link to="/new" className="menu__link">New User</Link>
        </li>
    </ul>

)

export default Navigation