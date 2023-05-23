import React,{useState} from "react"
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";


function Signup () {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })
    
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
          
        
    }

    return (
       
        <div className='d-flex justify-content-center align-items-center text-dark p-3 vh-100' style={{ backgroundColor: 'white' }}>
    <div className='text-dark p-3 rounded w-25 border border-dark shadow'>
        <h2><strong>Sign-Up</strong></h2>
        <form action="" onSubmit={handleSubmit}>                                                                                                                                                
            <div className='mb-3'>
                 <label htmlFor='Name'><strong>Name</strong></label>
                 <input type="text" placeholder="Enter Name" name="name"
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.name && <span className='text-danger'> {errors.name}</span>}
            </div>
            <div className='mb-3'>
                 <label htmlFor='Email'><strong>Email</strong></label>
                 <input type="email" placeholder="Enter Email" name="email" 
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
                 <label htmlFor='password'><strong>Password</strong></label>
                 <input type="password" placeholder="Enter Password" name="password"
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <button className='btn btn-primary w-100 rounded-0'>Sign up</button>
            <p>You agree to our terms and policies</p>
            <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none text-dark'>Login</Link>
        </form>
    </div>
</div>

    
    )
  }

export default Signup;
