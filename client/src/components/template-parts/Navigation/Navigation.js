import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes/routesConfigMain';
import './Navigation.scss';


const Navigation = () => {
    return (
        <nav id="main-navigation">
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navigation;

