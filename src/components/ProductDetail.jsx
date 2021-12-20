import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeProduct, fetchProduct} from '../redux/actions/productAction'
import {Link} from 'react-router-dom'
function ProductDetail() {
   const {productId} = useParams()
    const productDetail = useSelector( state => state.selectedProduct)
    console.log(productDetail);
    const dispatch = useDispatch()
   useEffect(() => {
       if(productId ){dispatch(fetchProduct(productId))}
       return () => {
           dispatch(removeProduct())
       }
   }, [])
    return (
        <div className='container'>
            {Object.keys(productDetail).length === 0  ? (
                <div>loadding....</div> 
            ):(
            <div className="row justify-content-center">
                <div className="col-10">
                    <div className="row" style={{Height:'60rem'}}>
                        <div className="col-7">
                            <img src={productDetail.image} alt="" style={{width:'70%', padding:'3rem', textAlign:'center'}} />
                        </div>
                        <div className="col-5">
                            <div className="product-info" style={{padding:'1rem'}}>
                                <h3 style={{marginBottom:'2rem'}}>{productDetail.title}</h3>
                                <span style={{padding:'1rem',borderRadius:'.5rem', backgroundColor:'#07a0ae', margin:'2rem', color:'#fff'}}>${productDetail.price}</span>
                                <div style={{border:'1px solid #777', padding: '1rem', marginTop:'2rem', marginBottom:'2rem'}}>{productDetail.category}</div>
                                <div style={{marginTop:'2rem'}}>{productDetail.description}</div>
                                <Link to='/cart'>
                                <span className='btn ' style={{backgroundColor:'#dc485c', margin:'2rem', color:'#fff'}}>add to cart</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            }
        </div>
    )
}

export default ProductDetail
