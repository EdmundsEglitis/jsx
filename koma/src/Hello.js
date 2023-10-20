import React, { useState, useEffect } from "react";
function Hello(){

const [name, setName] = useState("");

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