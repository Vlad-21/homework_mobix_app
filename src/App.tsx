import React, {useContext, useEffect, useState} from 'react';
import ProtectedRoute from "./components/PrivateRoute/PrivateRoute";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import {isAuth} from "./services/auth.servece";
import LoginPage from "./pages/LoginPage/LoginPage";
import './App.css';
import Header from "./components/Header/Header";

const App:React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(isAuth());
    const handleLogin = (isLogin: boolean):void => {
        setIsLogin(isLogin);
    }
    return (
        <Router>
            <div className="g-container">
                {isLogin && <Header changeLogin={handleLogin} />}
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute user={isLogin}>
                            <HomePage/>
                        </ProtectedRoute>}/>
                    {/*<Route path='*' element={<ErrorPage />}/>*/}
                    <Route path="/login" element={<LoginPage isLogin={isLogin} changeLogin={handleLogin}/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
