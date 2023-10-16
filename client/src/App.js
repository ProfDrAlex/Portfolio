// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/template-parts/Header/Header';
import Navigation from './components/template-parts/Navigation/Navigation'; // <-- Import here
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/template-parts/Footer/Footer';

function App() {
    return (
        <Router> {/* <-- Make sure Router wraps your app */}
            <div id="main-content">
                <Navigation />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
