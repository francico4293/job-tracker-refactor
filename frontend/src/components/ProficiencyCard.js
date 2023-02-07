import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import Card from 'react-bootstrap/Card';

const ProficiencyCard = ({ skillName, proficiency, setSkillToEdit, setShowEditSkillModal }) => {
    const handleClick = () => {
        setSkillToEdit({ skillName, proficiency });
        setShowEditSkillModal(true);
    }

    return (
        <Card className='proficiency-card'>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title className='fw-light fs-6'>{skillName}</Card.Title>
                    <div>
                        <i className='fa-solid fa-pen-to-square me-2' onClick={handleClick}/>
                        <i className='fa-solid fa-trash'/>
                    </div>
                </div>
                <div className='row d-flex align-items-center justify-content-center'>
                    <div className='col-8'>
                        <CircularProgressbar value={proficiency} text={`${[proficiency]}%`} />
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProficiencyCard;
