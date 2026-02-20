import { useForm } from 'react-hook-form';
import './../styles/pages/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Login(){
    const { register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const login = async (formValues:any) => {
        const requestBody = {
            email: formValues.email,
            password: formValues.password,
        };
        try{
            const response = await fetch("http://localhost:4000/login",{
                method: "POST",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(requestBody)
            })
            const data = await response.json();
            console.log(data);
            navigate("/");
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className="container my-3">
            <div className="d-flex justify-content-center column-gap-4">
                <h4 className="text-uppercase"><Link to="/login" className='text-dark'>Already Registered?</Link></h4>
                <h4 className="text-uppercase"><Link to="/signup" className='text-dark text-decoration-none'>Create Your Account</Link></h4>
            </div>

            <form onSubmit={handleSubmit(login)}>
                <div className="w-50 p-5 mx-auto mt-4" id='login-form'>
                    <div className="px-5">
                        <p>If you are already registered with RLJ, login here:</p>
                        <p className='m-0 fw-lighter text-end'>Required field*</p>
                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="text" className="form-control" id="emailLogin" placeholder="name@example.com"
                                {...register('email',{
                                    required: {value:true, message:'Email is required'},
                                    pattern: {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,message:'Incorrect Email Format'}
                                })}
                                />
                            <label htmlFor="emailLogin" className='ps-0'>Email address<span>*</span></label>
                        </div>
                        {errors.email?.message && <p className="text-danger small m-0">{String(errors.email.message)}</p>}

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="password" className="form-control" id="password" placeholder="..." 
                                {...register('password',{
                                    required: {value:true, message:'Password is required'}
                                })}
                            />
                            <label htmlFor="password" className='ps-0'>Password<span>*</span></label>
                        </div>
                        {errors.password?.message && <p className="text-danger small m-0">{String(errors.password.message)}</p>}
                    </div>
                    <div className='fw-lighter small ps-5'>
                        <h6 className='py-2 text-decoration-underline'>Forgot your password?</h6>
                        <p className='pb-2'>Read the <span className='text-decoration-underline'>Privacy Policy</span> for further information</p>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-dark text-uppercase rounded-0 px-4'>Login</button>
                        </div>
                    </div>                
                </div>
            </form>
        </div>
    )
}

export default Login;