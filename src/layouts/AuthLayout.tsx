import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginPage from "../pages/login/LoginPage";

const AuthLayout: React.FC = () => {
    return (
        <div className="auth-layout">
            <LoginPage/>
            <Outlet />
        </div>
    );
};

export default AuthLayout;
