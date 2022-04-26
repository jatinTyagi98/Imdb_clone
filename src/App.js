import './App.css';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Movies/>
    </div>
  );
}

export default App;
