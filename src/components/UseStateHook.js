import { React, useState } from 'react';

export default function UseStateHook() {
    const [myName, setMyName] = useState('Siam Khushnobish');
    const [count, setCount] = useState(0);
    const changeName = () => {
        // toggle the name button
        // if (myName === 'Siam Khushnobish') {
        //     setMyName('Rifadul Islam Khushnobish Siam');
        // } else {
        //     setMyName('Siam Khushnobish');
        // }

        // another way to toggle the name button
        if (count === 0) {
            setCount(count + 1);
            setMyName('Rifadul Islam Khushnobish Siam');
        } else {
            setCount(count - 1);
            setMyName('Siam Khushnobish');
        }
    };
    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={changeName}>Click Me</button>
        </div>
    );
}
