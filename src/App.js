import React from 'react'
import {Routes, Route} from 'react-router-dom'

import {ToastContainer, } from 'react-toastify'
import Home from './page/Home'
import  Edit from './page/Edit'
import Header from './components/Header'
import Add from './page/Add'
function App() {
    return (
        <>
        <Header/>
        <ToastContainer/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add' element={<Add/>} />
            <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
        </>
    )
}

export default App