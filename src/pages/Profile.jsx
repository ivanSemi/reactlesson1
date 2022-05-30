import React, { useContext } from 'react';
import { ThemeContext } from "../context";
const Profile = () => { 
    const theme = useContext(ThemeContext);
    return (
        <div style={{background: theme.background, color: theme.textColor}}>
            Profile
        </div>
    );
};

export default Profile;