import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Pages/Header/Header";
import Home from "./Components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login/Login";
import Signup from "./Components/Pages/Auth/Signup/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import RequireAuth from "./Components/Pages/Auth/Access/RequireAuth";
import DashboardIndex from "./Components/Pages/Dashboard/DashboardIndex";
import Users from "./Components/Pages/Dashboard/Users";
import AdminAuth from "./Components/Pages/Auth/Access/AdminAuth";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
           
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardIndex />} />
              <Route element={<AdminAuth />}>
                <Route path="users" element={<Users />} />
              </Route>
            </Route>

            
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Header>
      <ToastContainer />
    </div>
  );
}

export default App;
