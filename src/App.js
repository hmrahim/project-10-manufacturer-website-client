import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login/Login";
import Signup from "./Components/Pages/Auth/Signup/Signup";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import RequireAuth from "./Components/Pages/Auth/Access/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route  element={<RequireAuth/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        
      </Header>
      <ToastContainer/>
    </div>
  );
}

export default App;
