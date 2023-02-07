import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Form className='mt-3'>
            <Row className='mb-2'>
                <Form.Group as={Col}>
                    <Form.Label>First name</Form.Label>
                    <Form.Control onChange={e => setFirstName(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control onChange={e => setLastName(e.target.value)}/>
                </Form.Group>
            </Row>
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
            <Form.Group className='mb-3'>
                <Form.Label>Confirm password</Form.Label>
                <InputGroup>
                    <Form.Control type={showConfirmPassword ? 'text' : 'password'} onChange={e => setConfirmPassword(e.target.value)}/>
                    <InputGroup.Text onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {
                            showConfirmPassword ? <i className='fa-solid fa-eye-slash'/> : <i className='fa-solid fa-eye'/>
                        }
                    </InputGroup.Text>
                </InputGroup>                
            </Form.Group>
            <Button variant='primary' type='submit'>
                Signup
            </Button>
            <div className='d-flex justify-content-center align-items-center text-muted form-separator mt-3'>or</div>
            <div className='d-grid mt-3'>
                <Button className='google-button-container'>
                    <i className='fa-brands fa-google'/>
                    <span>Signup with Google</span>
                </Button>
            </div>
        </Form>
    );
}

export default SignupForm;
