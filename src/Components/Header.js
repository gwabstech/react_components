import React from "react";

function Headings(props) {
    console.log(props);
    return <h1>This is the heading with the name {props.name} and age {props.age}</h1>;
}

export default Headings;