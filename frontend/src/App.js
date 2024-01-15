// src/App.js
import React, { useState } from 'react';
import { Container } from 'reactstrap';
import HomePage from './pages/HomePage';
import LoginFormProfesor from './pages/LoginFormProfesor';
import LoginFormStudent from './pages/LoginFormStudent';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <Container className="p-5">
            {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === 'loginProfesor' && <LoginFormProfesor />}
            {currentPage === 'loginStudent' && <LoginFormStudent />}
        </Container>
    );
}

export default App;
