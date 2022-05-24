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
import AddItem from "./Components/Pages/Dashboard/AddItem";
import AllItems from "./Components/Pages/Dashboard/AllItems";
import UpdateProduct from "./Components/Pages/Dashboard/UpdateProduct";
import Details from "./Components/Pages/Home/Details";
import ManageOrders from "./Components/Pages/Dashboard/ManageOrders";
import MyOrders from "./Components/Pages/Dashboard/MyOrders";
import CompleteOrder from "./Components/Pages/Home/CompleteOrder";
import Payment from "./Components/Pages/Dashboard/Payment";
import Profile from "./Components/Pages/Dashboard/Profile"
import Reviews from "./Components/Pages/Dashboard/Reviews"
import UpdateProfile from "./Components/Pages/Dashboard/UpdateProfile";
import AllReviews from "./Components/Pages/Dashboard/AllReviews";

function App() {
  return (
    <div className="App">
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path="/details/:id" element={<Details />} />
          </Route>
          <Route path="/completeorder" element={<CompleteOrder />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardIndex />} />
              <Route element={<AdminAuth />}>
                <Route path="users" element={<Users />} />
                <Route path="manageorder" element={<ManageOrders />} />
                <Route path="allreview" element={<AllReviews/>} />
              </Route>
              <Route path="myorders" element={<MyOrders />} />
              <Route path="payment/:id" element={<Payment />} />
              <Route path="profile" element={<Profile/>} />
              <Route path="reviews" element={<Reviews/>} />
              <Route path="updateprofile" element={<UpdateProfile/>} />

              <Route path="additems" element={<AddItem />}></Route>
              <Route path="allproducts" element={<AllItems />}></Route>
              <Route
                path="updateproduct/:id"
                element={<UpdateProduct />}
              ></Route>
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
