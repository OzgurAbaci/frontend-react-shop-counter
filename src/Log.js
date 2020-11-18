import React from 'react';

function Log({history}) {
    return (
        <>
            {
                history.map((step, i) => <div key={i}>{step}</div>)
            }
        </>
    )
}

export default Log;