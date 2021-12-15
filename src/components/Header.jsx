import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <Link to="/" className='navbar-brand ml-5'>
                    redux concat
                </Link>
            </div>
        </>
    )
}

export default Header
