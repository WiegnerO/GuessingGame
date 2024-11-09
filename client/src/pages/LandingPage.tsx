import React from 'react';
import NavBar from '../components/NavBar';
import GuessingGameList from '../components/GuessingGameList';
import UsernameLoginModal from '../components/LoginModal';

interface ComponentNameProps {
    // Define your props here
    /* propName: propType; */
}

const ComponentName: React.FC<ComponentNameProps> = ({ /* props */ }) => {
    return (
        <div>
            <NavBar></NavBar>
            <GuessingGameList></GuessingGameList>
            <UsernameLoginModal></UsernameLoginModal>
        </div>
    );
};

export default ComponentName;
