export default function Slidebar(props){

    const SliderStyle = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        backgroundColor: "#289C92B0",
    }
    return <h2 style={SliderStyle}>Hello This is {props.name}</h2>
}

