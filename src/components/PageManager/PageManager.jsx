import { Routes, Route } from "react-router-dom";
//import { lazy } from "react";
//import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
//import { PublicRoute } from "../PublicRoute/PublicRoute";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { refreshUserThunk } from '../../redux/users-thunk';
// const Home = lazy(() => import("../../pages/Home/Home.js"));
// const Login = lazy(() => import("../../pages/Login"));
// const SignUp = lazy(() => import("../../pages/SignUp"));
import Home from "../../pages/Home/Home.jsx";
import Login from "../../pages/Login.jsx";
import SignUp from "../../pages/SignUp.jsx";


export const PageManager = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    // dispatch(refreshUserThunk());
    // }, [dispatch]);

    return (
        <Routes>  
            <Route path="/" element={<Login/>} />           
            <Route path="/login" element={<Login/>} />        
            <Route path="/register" element={<SignUp/>} /> 
            <Route path="*" element={<Login/>} />          
            <Route path="/transactions" element={<Home/>} />    
        </Routes>              
    )     
}



//<SignUp />  
//<Route path="/" element={<PublicRoute />}> </Route>
//<Route path="/" element={<PrivateRoute />}> </Route>
    