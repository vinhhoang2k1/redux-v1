import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className=' container'>
            <div className="row">            
                    <div className='col'><Link  style={{color:'#555',fontWeight:'700',fontSize:'3rem',textDecoration:'none'}} to='/'>fake shop</Link></div>
                    <Link to='/cart' style={{color:'#555',fontWeight:'700',fontSize:'3rem',textDecoration:'none'}} className="col cart">cart</Link>             
            </div>
        </div>
    )
}

export default Header
