// App.js
import React from 'react';
import {routes} from './components/config/routes/routesConfigMain';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/template-parts/Header/Header';
import Navigation from './components/template-parts/Navigation/Navigation';
import Footer from './components/template-parts/Footer/Footer';

function App() {
    return (
        <Router> {/* <-- Make sure Router wraps your app */}
            <div id="main-content">
                <Navigation/>
                <Header/>
                <Routes>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={React.createElement(route.component)}/>
                    ))}
                </Routes>
   {/*             <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>*/}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
