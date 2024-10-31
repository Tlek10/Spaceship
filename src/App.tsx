import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import './scss/app.scss';
import Home from "./pages/Home";
import StarshipDetail from "./pages/StarshipDetail/StarshipDetail";
import AuthLayout from "./layouts/AuthLayout";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Cart from "./pages/Cart/Cart";

const App: React.FC = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route
                            path=""
                            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/home"
                            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/spaceship/:name"
                            element={isAuthenticated ? <StarshipDetail /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/cart"
                            element={isAuthenticated ? <Cart /> : <Navigate to="/login" />}
                        />
                    </Route>
                    <Route path="/login" element={<AuthLayout />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
