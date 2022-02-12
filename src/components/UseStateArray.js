import React, { useState } from 'react';

export default function UseStateArray() {
    const users = [
        {
            id: 0,
            name: 'Siam',
            age: 18,
        },
        {
            id: 1,
            name: 'Khushnobish',
            age: 20,
        },
        {
            id: 3,
            name: 'Rifadul',
            age: 21,
        },
        {
            id: 4,
            name: 'Islam',
            age: 22,
        },
        {
            id: 5,
            name: 'Munia',
            age: 23,
        },
        {
            id: 6,
            name: 'Afrin',
            age: 24,
        },
    ];
    const [userInfo, setUserInfo] = useState(users);
    const clearData = () => {
        setUserInfo([]);
    };
    // console.log(users);
    return (
        <div>
            {userInfo.map((info, i) => {
                return (
                    <h3 key={i}>
                        Name : {info.name} Age : {info.age}
                    </h3>
                );
            })}
            <button onClick={clearData}>Clear</button>
        </div>
    );
}
