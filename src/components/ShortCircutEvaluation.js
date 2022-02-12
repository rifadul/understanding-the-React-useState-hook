// Short Circuit Evaluation with React
import React, { useState } from 'react';

export default function ShortCircutEvaluation() {
    const [demo, setDemo] = useState('');
    return (
        <div className="container text-center text-white">
            <h1>
                {demo || (
                    <>
                        <p>I am in up</p>
                        <p>Hello every one up</p>
                    </>
                )}
            </h1>
            <h1>
                {demo && (
                    <>
                        <p>I am in down</p>
                        <p>Hello every one down</p>
                    </>
                )}
            </h1>
        </div>
    );
}
