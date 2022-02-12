import React, { useState } from 'react';

export default function UseStateObject() {
    const [myobject, setMyobject] = useState({
        name: 'Siam',
        age: 22,
        roll: 12,
    });

    const changeName = () => {
        setMyobject({
            ...myobject,
            name: 'Siam Khushnobish',
        });
    };
    const changeAge = () => {
        setMyobject({
            ...myobject,
            age: 23,
        });
    };
    const changeRoll = () => {
        setMyobject({
            ...myobject,
            roll: 5,
        });
    };
    return (
        <div>
            <h1>Name : {myobject.name}</h1>
            <p>Age : {myobject.age}</p>
            <p>Roll : {myobject.roll}</p>
            <button onClick={changeName}>Update Name</button>
            <button onClick={changeAge}>Update Age</button>
            <button onClick={changeRoll}>Update Roll</button>
        </div>
    );
}
