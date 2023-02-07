import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UserProfile from '../components/UserProfile';
import ProficiencyCard from '../components/ProficiencyCard';
import SkillFrequencyChart from '../components/SkillFrequencyChart';
import EditSkillModal from '../components/EditSkillModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Profile = () => {
    const [showEditSkillModal, setShowEditSkillModal] = useState(false);
    const [skillToEdit, setSkillToEdit] = useState({ skillName: '', proficiency: 0 });
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);

        return () => {
            clearInterval(timer);
        }
    });

    return (
        <Container fluid>
            <Row>
                <Sidebar/>
                <Col xs={10} sm={9} md={10} className='ms-auto'>
                    <EditSkillModal skillToEdit={skillToEdit} show={showEditSkillModal} setShow={setShowEditSkillModal}/>
                    <Row className='d-flex flex-wrap justify-content-evenly mt-5 me-3 ms-3'>
                        <Col md={3} className='d-flex flex-column justify-content-start align-items-center mb-3'>
                            <Image 
                                src='/img/profile-image.svg' 
                                className='border shadow-sm mt-3' 
                                width={'100%'}
                                roundedCircle
                            />
                            <Row className='w-100 mt-3 me-5 ms-5 mb-3'>
                                <Col>
                                    <div className='bio border-bottom'>
                                        <p className='fw-bold'>Colin Francis</p>
                                        <p className='fw-light text-break'>francico@oregonstate.edu</p>
                                        <p className='fw-light mt-4'>Computer Science Student @ Oregon State University</p>
                                        <div className='d-grid'>
                                            <Button variant='secondary'>Edit Profile</Button>
                                        </div>
                                        <p className='mt-3'><i className='fa-solid fa-clock me-1'/>
                                            {date.toLocaleDateString()} @ {date.toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <div className='overview'>
                                        <p className='fw-light mt-3'>Profile Overview:</p>
                                        <p className='fw-light'><i className='fa-solid fa-chart-line me-1'/>Tracking 8 jobs</p>
                                        <p className='fw-light'><i className='fa-solid fa-circle-nodes me-1'/>Managing 10 contacts</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8} className='profile-content'>
                            <SkillFrequencyChart/>
                        </Col>
                    </Row>
                    <Row className='d-flex flex-wrap justify-content-evenly mt-3 me-3 ms-3 mb-5'>
                        <Col md={3}></Col>
                        <Col md={8} className='profile-content p-3'>
                            <h2>Your Skills</h2>
                            <p>Manage your skills and track your proficiency level</p>
                            <Row className='d-flex flex-wrap'>
                                <Col lg={4} className='mt-3'>
                                    <ProficiencyCard skillName='Java' proficiency='75' setSkillToEdit={setSkillToEdit} setShowEditSkillModal={setShowEditSkillModal}/>
                                </Col>
                                <Col lg={4} className='mt-3'>
                                    <ProficiencyCard skillName='Python' proficiency='95' setSkillToEdit={setSkillToEdit} setShowEditSkillModal={setShowEditSkillModal}/>
                                </Col>
                                <Col lg={4} className='mt-3'>
                                    <ProficiencyCard skillName='Docker' proficiency='15' setSkillToEdit={setSkillToEdit} setShowEditSkillModal={setShowEditSkillModal}/>
                                </Col>
                                <Col lg={4} className='mt-3'>
                                    <ProficiencyCard skillName='React.js' proficiency='80' setSkillToEdit={setSkillToEdit} setShowEditSkillModal={setShowEditSkillModal}/>
                                </Col>
                                <Col lg={4} className='mt-3'>
                                    <Button variant='secondary'>Add Skill</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
