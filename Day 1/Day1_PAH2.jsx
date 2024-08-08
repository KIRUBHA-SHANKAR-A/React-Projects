const datatypes = () =>
{
    alert("Check the console output");
    let age = 18;
    let name = "kiran";
    let setStatus = false;
    let userDefault = undefined;
    let responsevalue = null;

    console.log(age);
    console.log(name);
    console.log(setStatus);
    console.log(userDefault);
    console.log(responsevalue);

    let oldage = age;
    let status = setStatus;

    age = 25;
    setStatus = true;

    console.log(oldage);
    console.log(age);
    console.log(status);
    console.log(setStatus);
}

function B()
{
    return (
      <div>
        <button onClick={datatypes()}>Click</button>
      </div>
    );
}

export default B;