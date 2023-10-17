import React from 'react';
import './Header.scss';
import {Link, Route} from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="title-container">
                <h1>Alexander<br />
                    Düsterbeck, <br />
                    Web-Entwickler</h1>
            </div>
            <Link  to="/Kontakt">Kontakt aufnehmen</Link >
        </header>
    );
};

export default Header;



