import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import { actionContact } from '../redux/actions/action'
function Home() {
    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    function deleteContact(id){
        dispatch(actionContact('DELETE_CONTACT',id))
        toast.success('delete success !')
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 my-5 text-end">
                    <Link to='/add' className='btn btn-outline-dark' >
                        add item
                    </Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className='table '> 
                        <thead className='table-dark'>
                            <tr> 
                            <th scope='col'>#</th>
                            <th scope='col'>name</th>
                            <th scope='col'>number</th>
                            <th scope='col'>email</th>
                            <th></th>
                            <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact,i) => (
                                <tr key={i}>
                                    <th scope='row'>{contact.id}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                    <td>{contact.email}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className='btn btn-info'>
                                          edit 
                                        </Link>
                                    </td>
                                    <td >
                                        <span className='btn btn-danger' onClick={() => {deleteContact(contact.id)}} >
                                        delete
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
           
        </div>
    )
}

export default Home
