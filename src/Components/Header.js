import React from "react";

function Headings(props) {
    console.log(props);
    const headingStyle = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        backgroundColor: "#FFFF00",
        
    
        
    }
    return <div style={headingStyle}>
    
        <h1>This is the heading with the name {props.name} and age {props.age}</h1>;

    </div>
   
}

export default Headings;