import Headings from "./Components/Header";
import Main from "./Components/Main";
import Slidebar from "./Components/Slidebar";

function App() {
  return <div>
    <Headings name="Abubakar" age="26" />;
    <Main greet="Hello world"/>
    <Slidebar name= "Slide Bar"/>
  </div>
}

export default App;
