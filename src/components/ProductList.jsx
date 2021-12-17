import React, {useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import ProductCard from './ProductCard';
import {setProduct} from '../redux/actions/productAction'

function ProductList() {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()
    const fetchProduct = async () => {
        const  response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => console.log('err :',err))
        dispatch(setProduct(response.data))
    } 
    useEffect(()=> {
        fetchProduct()
    },[])
    return (
        <div className="container">
            
        <div className='ui row '>
            {products.map(product => <ProductCard key={product.id} data={product}/>)}
        </div>
        </div>
    )
}

export default ProductList
