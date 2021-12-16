import React from 'react'
import {Link} from 'react-router-dom'
function ProductCard({data}) {
    return (
            <div className="col-3 " >
            <div class="card" style={{marginBottom:'1rem'}}>
                <img src={data.image} classname="card-img-top " style={{height:'10rem', width:'10rem', objectFit:'contain', margin: 'auto', paddingTop:'.5rem'}}/>              
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <h3 className='catd-price'>${data.price}</h3>
                    <Link dataId={data.id} to={`/product/${data.id}`} class="btn btn-primary btn-lg">go now</Link>
                </div>
            </div>
            </div>
    )
}

export default ProductCard
