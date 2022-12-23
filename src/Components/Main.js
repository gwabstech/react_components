function Main(props){
    const MainStyle = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        backgroundColor: "#289C2EB0",



    }
    return <h2 style={MainStyle}>{props.greet}</h2>;
}

export default Main;