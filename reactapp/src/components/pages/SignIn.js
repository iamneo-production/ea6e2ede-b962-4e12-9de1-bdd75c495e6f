import { useState } from "react";
import { Link } from "react-router-dom";
import './SignIn.css';

const Login = () => {
    const[details,setDetails] = useState({}); 
    const userType = details.userType;
    const handleDetails = (e) => {
        setDetails({...details, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    }

    return(
        <div className="sign-in">
            <div className="sign-in-container">
                <h1 className="sign-in-text">Login</h1>
                <div className="signup-container">
                    <p>Don't have an account?
                    <span className="signup-link">
                        <Link to='/signup' style={{textDecoration: 'none'}}>Sign up</Link>
                    </span>
                    </p>
                   
                </div>
                <div className="sign-in-form">
                    <form onSubmit = {handleSubmit}>
                        <div className="label-conatiner">
                            <label>Email</label>
                            <div className="input-container">                         
                                <input type="email" name="email" onChange={handleDetails} required/>
                            </div>
                        </div>
                        <div className="label-conatiner">
                            <label>Password</label>
                            <div className="input-container">                         
                                <input type="password" name="password" pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" onChange={handleDetails} required/>
                            </div>
                        </div>
                        <div className="label-container">
                            <label>User Type</label>
                            <div className="input-container">                         
                                <select name="userType" onChange={handleDetails}>
                                    <option value = ""></option>
                                    <option value = "client">Client</option>
                                    <option value = "provider">Insurance Provider</option>
                                </select>
                            </div>
                        </div>
                        { userType === 'client' && (
                            <div className="label-container">
                                <label>Pincode</label>  
                                <div className="input-container">
                                    <input type="text" name="pincode" onChange={handleDetails} required />
                                </div>
                            </div>
                        )}
                        { userType === 'provider' && (
                            <div className="label-container">
                                <label>Company Name</label>
                                <div className="input-container">
                                    <input type="text" name="company" onChange={handleDetails} required />
                                </div>
                                <label>Employee Id</label>
                                <div className="input-container">
                                    <input type="text" name="employeeId" onChange={handleDetails} required />
                                </div>
                            </div>
                        )}
                        <div className="button-container">
                            <button type="submit" className="signup-button">
                                <Link to='/dash' style={{textDecoration: 'none', color: 'white'}}>SIGN IN</Link>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="signup-container">
                    <p>Forgot Password?
                    <span className="signup-link">
                        <Link to='/' style={{textDecoration: 'none'}}>Reset</Link>
                    </span>
                    </p>                   
                </div>
            </div>
        </div>
    )
}

export default Login;