import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Layout from './Layout/Layout';

const LoginForm = lazy(() => import('pages/LoginForm'));
const RegisterForm = lazy(() => import('pages/RegisterForm'));
const Contacts = lazy(() => import('pages/Contacts'));
const HomePage = lazy(() => import('pages/HomePage'));


const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<PublicRoute />}>
                    <Route index element={<Navigate to='home' />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<Contacts />} />
                </Route>

                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    )
};



export default UserRoutes;