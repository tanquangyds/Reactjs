import React from 'react';

import './UserOutput.css'

const userInput = (props) => {
    return (
        <div className="userName">
            <p>User Name: {props.name}</p>
            <p>Change my Name Please!</p>
        </div>
        
    )
}

export default userInput;