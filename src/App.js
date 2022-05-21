import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        
      </Header>
    </div>
  );
}

export default App;
