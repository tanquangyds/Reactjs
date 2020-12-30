import React from 'react';

const styleInput = {
    border: '1px solid red',
    borderRadius: '999px',
    textAlign: 'center',
    outline: 'none'
}

const userInput = (props) => {
    return (
        <input 
        style={styleInput}
        type="text" 
        onChange={props.changed} 
        value={props.currentName}></input>
    )
}

export default userInput;