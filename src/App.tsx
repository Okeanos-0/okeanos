import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';

import './App.css';

const App: FC = () => {
    // TODO: Add About Me
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/okeanos/projects" element={<Projects />} />
            </Routes>
        </div>
    );
};

export default App;
