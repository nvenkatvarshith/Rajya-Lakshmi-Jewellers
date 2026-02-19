import {Link} from 'react-router-dom';
import './../styles/pages/Signup.css';

function Signup(){
    
    return (
        <div className="container my-3">
            <div className="d-flex justify-content-center column-gap-4">
                <h4 className="text-uppercase"><Link to="/login" className='text-dark text-decoration-none'>Already Registered?</Link></h4>
                <h4 className="text-uppercase"><Link to="/signup" className='text-dark'>Create Your Account</Link></h4>
            </div>

            <div className="w-50 p-5 mx-auto mt-4" id='signup-form'>
                <div className='w-100'>
                    <div className="px-5">
                        <p>This space allows you to manage your personal information, e-Boutique orders, news updates and newsletter subscriptions.</p>
                        <p className='m-0 fw-lighter text-end'>Required field*</p>
                        
                        <div className='d-flex column-gap-3 fs-6'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="radioDefault" id="mr"/>
                                <label className="form-check-label" htmlFor="radioDefault1">
                                    Mr
                                </label>
                            </div>
                            
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="mrs" id="mrs"/>
                                <label className="form-check-label" htmlFor="mrs">
                                    Mrs
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="ms" id="ms"/>
                                <label className="form-check-label" htmlFor="ms">
                                    Ms
                                </label>
                            </div>
                        </div>

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="text" className="form-control" id="first-name" placeholder="name@example.com"/>
                            <label htmlFor="first-name" className='ps-0'>First name<span>*</span></label>
                        </div>

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="text" className="form-control" id="last-name" placeholder="name@example.com"/>
                            <label htmlFor="last-name" className='ps-0'>Last name<span>*</span></label>
                        </div>

                        <div className='d-flex'>
                            <div className='w-25'>
                                <label htmlFor="prefix" className='fw-lighter'>Prefix<span>*</span></label>
                                <select className="form-select ps-0 mb-3 border-bottom shadow-none border-end border-dark rounded-0" aria-label="Default select example" id='prefix'>
                                    <option value="+91" className='fw-lighter'>+91</option>
                                </select>
                            </div>
                            <div className="form-floating mb-3 border-bottom border-dark shadow-none w-75">
                                <input type="text" className="form-control" id="phone" placeholder="name@example.com"/>
                                <label htmlFor="phone" className='ps-2'>Phone<span>*</span></label>
                            </div>
                        </div>

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="email" className="form-control" id="emailLogin" placeholder="name@example.com"/>
                            <label htmlFor="emailLogin" className='ps-0'>Email address<span>*</span></label>
                        </div>

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="email" className="form-control" id="confirmEmailLogin" placeholder="name@example.com"/>
                            <label htmlFor="confirmEmailLogin" className='ps-0'>Confirm Email<span>*</span></label>
                        </div>
                        
                        <div className='mt-4 fw-lighter'>
                            <p className='m-0'>Password requirements</p>
                            <ul className='ps-2'>
                                <div className='d-flex'>
                                    <div className='px-2 py-1'>
                                        <li>No repetition of more than two characters</li>
                                        <li>One number</li>
                                        <li>At least 1 special character(s)</li>
                                    </div>
                                    <div className='px-2 py-1'>
                                        <li>One lowercase character</li>
                                        <li>One uppercase character</li>
                                        <li>10 characters minimum</li>
                                    </div>
                                </div>
                                <li>Allowed special character(s) from !"#$£€%&()*+,-./:?@[]^_{}~`¨</li>
                            </ul>
                        </div>

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="password" className="form-control" id="password" placeholder="..."/>
                            <label htmlFor="password" className='ps-0'>Password<span>*</span></label>
                        </div>

                        <div className="form-floating mb-3 border-bottom border-dark shadow-none">
                            <input type="password" className="form-control" id="confirm-password" placeholder="..."/>
                            <label htmlFor="confirm-password" className='ps-0'>Confirm Password<span>*</span></label>
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="language" className='fw-lighter'>Preferred Language</label>
                            <select className="form-select ps-0 border-bottom border-dark rounded-0" aria-label="Default select example" id='language'>
                                <option value="english" className='fw-lighter'>English</option>
                            </select>
                        </div>

                        <div className='my-5 py-3 border border-start-0 border-end-0 w-75 small'>
                            <h6>At RLJ, we treasure our relationship with you.</h6>
                            <p> In order to deliver the most relevant services and design 
                                the right experience for you, we handle your personal information
                                with the highest care and rigour.</p>
                        </div>

                    </div>
                    <div className='fw-normal small ps-5'>
                        <p className='pb-2'>For further information about how we use your personal information, please see our <span className='text-decoration-underline'>Privacy Policy</span></p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkDefault"/>
                            <label className="form-check-label" htmlFor="checkDefault">
                                <p>I would also like to receive marketing information about RLJ's products or services. <br /> <br />
                                    We may send you this information using e-mail, text, telephone or post. We may also use your information to deliver personalised messages or advertising on social media or other digital platforms. You can ask us to stop marketing at any time.
                                </p>
                            </label>
                        </div>                        
                        <div className='text-center'>
                            <button className='btn btn-dark text-uppercase rounded-0 px-4 w-100'>Create account</button>
                        </div>
                    </div>   
                </div>             
            </div>
        </div>
    )
}

export default Signup;