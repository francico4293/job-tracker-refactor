import React from 'react';
import Button from 'react-bootstrap/Button';

const UserProfile = () => {
    return (
        <div id='bio'>
            <h2>Colin Francis</h2>
            <h3>francico@oregonstate.edu</h3>
            <p className='mt-4'>Computer Science Student @ Oregon State University</p>
            <p className='mt-4'>Tracking 8 Jobs</p>
            <div className='d-grid'>
                <Button>Edit Profile</Button>
            </div>
        </div>
    );
}

export default UserProfile;
