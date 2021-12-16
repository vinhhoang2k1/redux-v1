import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'

import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import './app.css'
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ProductList/>}/>
                <Route path='/product/:productId' element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </> 
    )
}

export default App