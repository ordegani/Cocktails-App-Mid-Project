import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

function Navbar() {
    return (
        <div>
            <ul className="navUl">
                
                <li><Link className="link" to="/HelloPage">Hello</Link></li>
                <li><Link className="link" to="/">Main</Link></li>
                <li><Link className="link" to="/Info">More Info</Link></li>
                <li><Link className="link" to="/Random">Surprise Me</Link></li>
                {/* </ul>li> <Link to={`/Favourites/`}>Ann's Profile</Link></li> */}
            </ul>
        </div>
    )
}

export default Navbar;