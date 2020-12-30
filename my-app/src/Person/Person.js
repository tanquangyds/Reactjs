import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name}. And I am {props.age} years old</p>
            <p> I am in class FE {props.class}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;