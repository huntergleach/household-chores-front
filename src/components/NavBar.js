import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
           <ul>
               <li><NavLink to="/selectprofile">Select Member</NavLink></li>
               <li><NavLink to="/createprofile">Create Member</NavLink></li>
               <li><NavLink to="/everyone">Shared Tasks</NavLink></li>
           </ul>
        </nav>
    )
}

export default NavBar
