import { React, useState } from 'react';

export const TodoWithUseState = () => {
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
    const clearOneData = (id) => {
        const myNewArray = userInfo.filter((curentElement) => {
            return curentElement.id !== id;
        });
        setUserInfo(myNewArray);
    };
    return (
        <div className="main-div">
            {userInfo.map((info, i) => {
                return (
                    <div className="info-div" key={i}>
                        <h4>
                            Name : {info.name}, Age : {info.age}
                        </h4>
                        <button
                            className="btn-remove"
                            onClick={() => clearOneData(info.id)}>
                            Remove
                        </button>
                    </div>
                );
            })}
            <button className="submit-btn" onClick={clearData}>
                Clear
            </button>
        </div>
    );
};
