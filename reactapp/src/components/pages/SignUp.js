import { useState } from "react";
import { Link } from "react-router-dom";
import './SignUp.css'
const SignUp = () => {

    const[details,setDetails] = useState({}); 
    const userType = details.userType;

    const handleDetails = (e) => {
        setDetails({...details, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = "/";
        console.log(details);
    }
    
    return(
        <div className="sign-up">
            <div className="sign-up-container">
                <h1 className="sign-up-text">Signup</h1>
                <div className="sign-up-form">
                    <form onSubmit={handleSubmit}>
                        <div className="label-container">
                            <label>First Name</label>
                            <div className="input-container">                         
                                <input type="text" name="firstName" onChange={handleDetails} required/>
                            </div>
                        </div>
                        <div className="label-container">
                            <label>Last Name</label>
                            <div className="input-container">                         
                                <input type="text" name="lastName" onChange={handleDetails} required/>
                            </div>
                        </div>
                        <div className="label-container">
                            <label>Email</label>
                            <div className="input-container">                         
                                <input type="email" name="email" onChange={handleDetails} required/>
                            </div>
                        </div>
                        <div className="label-container">
                            <label>Password</label>
                            <div className="input-container">                         
                                <input type="password" name="password" onChange={handleDetails}  pattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required/>
                            </div>
                        </div>
                        <div className="label-container">
                            <label>Mobile</label>
                            <div className="input-container">                         
                                <input type="text" name="mobile" onChange={handleDetails} pattern="[1-9]{1}[0-9]{9}" required/>
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
                                {/* <Link to='/' style={{textDecoration: 'none', color: 'white'}}>SIGN UP</Link> */}
                                SIGN UP
                            </button>
                        </div>
                    </form>
                </div>
                <div className="signin-container">
                    <p>Already have an account?
                    <span className="signin-link">
                        <Link to='/login' style={{textDecoration: 'none'}}>Sign in</Link>
                    </span>
                    </p>                        
                </div>
            </div>
        </div>
    )
}

export default SignUp;

// import { useState } from "react";

// const Signup = () => {
//     const[firstName,setFirstName] = useState(""); 
//     const[lastName,setLastName] = useState(""); 
//     const[email,setEmail] = useState(""); 
//     const[password,setPassword] = useState(""); 
//     const[mobile,setMobile] = useState(""); 
//     const[userType,setUserType] = useState("client"); 
//     const[pincode,setPincode] = useState(""); 
//     const[company,setCompanyName] = useState(""); 
//     const[employeeId,setEmployeeId] = useState(""); 

//     const handleFirstName = (e) => {
//         setFirstName(e.target.value);
//     }
//     const handleLastName = (e) => {
//         setLastName(e.target.value);
//     }
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//     const handlePassword= (e) => {
//         setPassword(e.target.value);
//     }
//     const handleMobile = (e) => {
//         setMobile(e.target.value);
//     }
//     const handleUserType = (e) => {
//         setUserType(e.target.value);
//     }
//     const handlePincode = (e) => {
//         setPincode(e.target.value);
//     }
//     const handleCompanyName = (e) => {
//         setCompanyName(e.target.value);
//     }
//     const handleEmployeeId = (e) => {
//         setEmployeeId(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Sign up");
//     }
    
//     return(
//         <div>
//             <div className="signup">
//                 <h1>Signup</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="label-conatiner">
//                         <label>First Name</label>
//                         <div className="input-container">                         
//                             <input type="text" value={firstName} onChange={handleFirstName} required/>
//                         </div>
//                     </div>
//                     <div className="label-conatiner">
//                         <label>Last Name</label>
//                         <div className="input-container">                         
//                             <input type="text" value={lastName} onChange={handleLastName} required/>
//                         </div>
//                     </div>
//                     <div className="label-conatiner">
//                         <label>Email</label>
//                         <div className="input-container">                         
//                             <input type="email" value={email} onChange={handleEmail} required/>
//                         </div>
//                     </div>
//                     <div className="label-conatiner">
//                         <label>Password</label>
//                         <div className="input-container">                         
//                             <input type="password" value={password} onChange={handlePassword}  pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}" required/>
//                         </div>
//                     </div>
//                     <div className="label-conatiner">
//                         <label>Mobile</label>
//                         <div className="input-container">                         
//                             <input type="text" value={mobile} onChange={handleMobile} pattern="[1-9]{1}[0-9]{9}" required/>
//                         </div>
//                     </div>
//                     <div className="label-conatiner">
//                         <label>User Type</label>
//                         <div className="input-container">                         
//                             <select value={userType} onChange={handleUserType}>
//                                 <option value = "client">Client</option>
//                                 <option value = "provider">Insurance Provider</option>
//                             </select>
//                         </div>
//                     </div>
//                     { userType === 'client' && (
//                         <div className="label-container">
//                             <label>Pincode</label>  
//                             <div className="input-container">
//                                 <input type="text" value={pincode} onChange={handlePincode} required />
//                             </div>
//                         </div>
//                     )}
//                     { userType === 'provider' && (
//                         <div className="label-container">
//                             <label>Company Name</label>
//                             <div className="input-container">
//                                 <input type="text" value={company} onChange={handleCompanyName} required />
//                             </div>
//                             <div className="label-container">
//                             <label>Employee Id</label>
//                             <div className="input-container">
//                                 <input type="text" value={employeeId} onChange={handleEmployeeId} required />
//                             </div>
//                             </div>
//                         </div>
//                     )}
//                     <div className="button-container">
//                         <button type="submit" className="signup-button">
//                         Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;