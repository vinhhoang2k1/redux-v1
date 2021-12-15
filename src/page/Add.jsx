import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import {actionContact} from '../redux/actions/action'

function Add() {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact =>contact.email === email && contact);
        const checkNumber = contacts.find(contact =>contact.number === parseInt(number) && contact )
        if(!email || !name || !number) {    
            return toast.warning('please check input type')
        }
        if (checkEmail){
            return toast.error('this email is already exits !')
        }
        if (checkNumber){
            return toast.error('this number is already exits !')
        }
        else {
            setEmail('');
            setName('');
            setNumber('');
            const data = {
                id: contacts.length + 1,
                name,
                email,
                number
            }
            dispatch(actionContact('ADD_CONTACT',data));
            return (
                navigate(-1),
                toast.success('add successfull'))   
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <h3 className="display-3 text-center">
                    add contact
                </h3>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <input
                             type="text" 
                             placeholder='ex:vinh Hoang'
                            className='form-control m-3'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                             />
                        </div>
                        <div className="form-group">
                            <input type="email"
                             placeholder='ex:vinhhoang@gmail.com'
                             className='form-control m-3' 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                        <div className="form-group">
                            <input type="number"
                             placeholder='ex:0123456789'
                             className='form-control m-3' 
                             value={number}
                             onChange={(e) => setNumber(e.target.value)}
                             />
                        </div>
                        <div className="form-group">
                            <input type="submit" 
                            value='add student' 
                            className='btn btn-dark col-12 m-3' 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
