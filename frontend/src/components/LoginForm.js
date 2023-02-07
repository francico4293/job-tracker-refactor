import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Form className='mt-3'>
            <Form.Group className='mb-2'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <Form.Control type={showPassword ? 'text' : 'password'} onChange={e => setPassword(e.target.value)}/>
                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <i className='fa-solid fa-eye-slash'/> : <i className='fa-solid fa-eye'/>
                        }
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>
            <a className='d-block mb-3'>Forgot password?</a>
            <Button variant='primary' type='submit'>
                Login
            </Button>
            <div className='d-flex justify-content-center align-items-center text-muted form-separator mt-3'>or</div>
            <div className='d-grid mt-3'>
                <Button className='google-button-container'>
                    <i className='fa-brands fa-google'/>
                    <span>Login with Google</span>
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;
