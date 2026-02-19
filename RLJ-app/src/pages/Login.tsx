import { useForm } from 'react-hook-form';
import './../styles/pages/Login.css';
import {Link} from 'react-router-dom'

function Login(){
    const { register, handleSubmit, formState:{errors}, watch} = useForm();

    return (
        <div className="container my-3">
            <div className="d-flex justify-content-center column-gap-4">
                <h4 className="text-uppercase"><Link to="/login" className='text-dark'>Already Registered?</Link></h4>
                <h4 className="text-uppercase"><Link to="/signup" className='text-dark text-decoration-none'>Create Your Account</Link></h4>
            </div>

            <div className="w-50 p-5 mx-auto mt-4" id='login-form'>
                <div className="px-5">
                    <p>If you are already registered with Cartier, login here:</p>
                    <p className='m-0 fw-lighter text-end'>Required field*</p>
                    <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                        <input type="email" className="form-control" id="emailLogin" placeholder="name@example.com"/>
                        <label htmlFor="emailLogin" className='ps-0'>Email address<span>*</span></label>
                    </div>

                    <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                        <input type="password" className="form-control" id="password" placeholder="..."/>
                        <label htmlFor="password" className='ps-0'>Password<span>*</span></label>
                    </div>
                </div>
                <div className='fw-lighter small ps-5'>
                    <h6 className='py-2 text-decoration-underline'>Forgot your password?</h6>
                    <p className='pb-2'>Read the <span className='text-decoration-underline'>Privacy Policy</span> for further information</p>
                    <div className='text-center'>
                        <button className='btn btn-dark text-uppercase rounded-0 px-4'>Login</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Login;