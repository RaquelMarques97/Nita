import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';



function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <div>
                        <li><NavLink exact to="/">Nita</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink exact to="/newclient" >Novo Cliente</NavLink></li>
                    </div>
                    <div>
                        <li><NavLink exact to="/searchclient" >Procurar Cliente</NavLink></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;