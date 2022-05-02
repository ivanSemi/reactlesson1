import React from 'react';
import PropTypes from "prop-types";

const Message = ({name}) => {
    return (
        <span className='nameTxt'>{name}</span>
    );
};

if (![]){
    Message.propTypes = {
        name: PropTypes.string.isRequired
    }
}


export default Message;