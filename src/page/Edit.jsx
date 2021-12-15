import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import {actionContact} from '../redux/actions/action'

function Edit() {
    const {id} = useParams();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(state => state.id  === parseInt(id))
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
    }, [currentContact])
    const handleSubmit = (e) => {
        e.preventDefault();
        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email );
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number)  )
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
                id: parseInt(id),
                name,
                email,
                number
            }
            dispatch(actionContact('EDIT_CONTACT',data));
            return (
                navigate(-1),
                toast.success('update successfull'))   
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <h3 className="display-3 text-center">
                    {` edit contact ${id}`}
                </h3>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className='form-control m-3' />
                        </div>
                        <div className="form-group">
                            <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control m-3' />
                        </div>
                        <div className="form-group">
                            <input 
                            type="number" 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className='form-control m-3' />
                        </div>
                        <div className="form-group">
                            <input 
                            type="submit" 
                            value='save' 
                            className='btn btn-dark  m-3' />
                            <Link to='/' >
                            <input 
                            type="submit" 
                            value='exit' 
                            className='btn btn-danger m-3' />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit
