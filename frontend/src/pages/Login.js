import React from 'react';
import Sidebar from '../components/Sidebar';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Login = () => {
    return (
        <Container fluid>
            <Row className='h-100'>
                <Sidebar/>
                <Col xs={10} sm={9} md={10} className='ms-auto'>
                    <Row className='h-100 d-flex justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center'>
                            <Col lg={6} xl={4} className='d-none d-lg-block login-image'>
                                <Image src={'/img/login.jpg'} fluid/>
                            </Col>
                            <Col sm={10} md={8} lg={6} xl={4} className='p-5 form'>
                                <div>
                                    <h2 className='text-center'>Welcome!</h2>
                                    <p className='text-muted text-center'>Signup or login to start tracking jobs</p>
                                </div>
                                <Tabs variant='tabs' defaultActiveKey='login'>
                                    <Tab eventKey='login' title='Login'>
                                        <LoginForm/>
                                    </Tab>
                                    <Tab eventKey='signup' title='Signup'>
                                        <SignupForm/>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
