import React, { useState, useEffect } from "react";
function Hello(props){

const [name, setName] = useState(props.name);

function changeName(event){
    setName(event.target.value);
}
    return(
    <>
        <input value={name} onChange={changeName}/>
        <h1>hello,{name}</h1>
    </>
    )
}

export default Hello;