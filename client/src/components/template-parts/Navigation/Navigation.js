import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../config/routes/routesConfigMain';
import './Navigation.scss';


const Navigation = () => {
    return (
        <nav id="main-navigation">
        <ul>
            {routes.map((route, index) => (
                <li key={index}>
                    <NavLink to={route.path} className={nav => (nav.isActive ? "main-link active" : "main-link")}>
                        {route.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
    );
};
export default Navigation;

