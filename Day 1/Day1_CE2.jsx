import React from 'react';

const method = () =>
{
     let myobject = {name : "Madras"};
     let newobject = myobject;
     
     myobject.name = "Chennai";

     console.log(myobject === newobject);

     let myarray = ['a','e','i','o'];
     let vowelarray = myarray;
     myarray.push('u');
     alert("Check the console output");
     console.log(vowelarray);
}

const App = () =>
{
    return(
        <div>
            <button onClick={method}>Click</button>
        </div>
    );
}
export default App;