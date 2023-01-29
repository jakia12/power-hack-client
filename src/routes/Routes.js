import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import DisplayError from '../components/displayError/DisplayError';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NotFound from '../pages/notFound/NotFound';
import SignUp from '../pages/signup/SignUp';


export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<Main />} errorElement={<DisplayError />}>

            <Route path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />


        </Route>



    </>
));

