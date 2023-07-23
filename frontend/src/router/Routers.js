import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../Pages/Home';
import Tours from '../Pages/Tours';
import ToursDetails from '../Pages/ToursDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';
const Routers = () => {
    return (
       <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<ToursDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
       </Routes>
    );
};

export default Routers;