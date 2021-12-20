import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ProductCard from './ProductCard';
import {fetchProducts} from '../redux/actions/productAction'

function ProductList() {
    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()  
    useEffect(()=> {
        dispatch(fetchProducts())
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
