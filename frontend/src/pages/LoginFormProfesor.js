// src/pages/LoginFormProfesor.js
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginFormProfesor() {
    // State pentru stocarea datelor formularului
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Funcția pentru gestionarea trimiterii formularului
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/user/login-profesor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Eroare la trimiterea datelor: ', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="profesor@csie.ase.ro" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="password">Parola</Label>
                <Input type="password" name="password" id="password" placeholder="parola" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <Button type="submit">Autentificare</Button>
        </Form>
    );
}

export default LoginFormProfesor;
