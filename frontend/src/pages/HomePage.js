// src/pages/HomePage.js
import React from 'react';
import { Button } from 'reactstrap';

function HomePage({ setCurrentPage }) {
    return (
        <div className="text-center">
            <Button color="primary" onClick={() => setCurrentPage('loginProfesor')}>Profesor</Button>
            <Button color="secondary" onClick={() => setCurrentPage('loginStudent')} className="ml-2">Student</Button>
        </div>
    );
}

export default HomePage;
