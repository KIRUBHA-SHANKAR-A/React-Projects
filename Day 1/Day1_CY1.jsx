import React from 'react';


function compare() {
        const name1 = "Kabil";
        const name2 = "Kabil";

        const object1 = { name: "Kabil" };
        const object2 = { name: "Kabil" };

        console.log(name1 === name2);
        console.log(object1 === object2);
}

function A() {
    return (
        <div>
            <button onClick={compare()}>Compare</button>
        </div>
    );
}

export default A;