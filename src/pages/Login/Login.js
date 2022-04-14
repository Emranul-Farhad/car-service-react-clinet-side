import React, { useState } from 'react';
import Header from '../../Shared pages/Headr/Header';
import './Login.css'
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebaseKey/Firekey';
import { useNavigate } from 'react-router-dom';





const Login = () => {

    const navigate = useNavigate()
    const [errors, setError] = useState("")
    const [email, setEmai] = useState("")
    const [password, setPassword] = useState("")
    const [conpass, setConpass] = useState(" ")
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);

     const [Email , setEmaiL] = useState("")
     const [PassworD , setPasswords] = useState("")
    const [
        signInWithEmailAndPassword,
        users,
        loadings,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const getemail = event => {
        setEmai(event.target.value)
        console.log(event.target.value);
    }

    const getpass = event => {
        setPassword(event.target.value)
        console.log(event.target.value);
    }

    const confirmpass = event => {
        setConpass(event.target.value)
    }

if(user){
    navigate("/")
}

    const signuphandel = event => {
        event.preventDefault()
        if (password !== conpass) {
           return setError("password don't matched ")
            
        }
        createUserWithEmailAndPassword(email, password)
        setError("  ")
    

    }

    const EmailLogin = event => {
        setEmaiL(event.target.value)
    }

    const PassLogin = event => {
        setPasswords(event.target.value)
    }

    if(users){
        navigate('/')
    }
    const handelLogin = event => {
        if(PassworD === ''){
            setError('must need passwords')
        }
        else { 
        event.preventDefault()
        signInWithEmailAndPassword(Email , PassworD)
        }
    }
    
    return (
        <div>
            <Header></Header>

            <div className='d-flex justify-content-center loginMain'>

         {
             loading ? <p>Loading...</p> : 
         
                <div className="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="signup">
                        <form onSubmit={signuphandel} >
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input onBlur={getemail} type="email" name="email" placeholder="Email" required />
                            <input onBlur={getpass} type="password" name="pswd" placeholder="Password" required />
                            <input onBlur={confirmpass} type="password" name="txt" placeholder="Confirm Password" required />
                            <p style={{ color: 'red' }} > {errors} </p>
                            <button className='loginButton' >Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form  onSubmit={handelLogin} >
                            <label for="chk" aria-hidden="true">Login</label>
                            <input onBlur={EmailLogin} type="email" name="email" placeholder="Email" required />
                            <input onBlur={PassLogin}  type="password" name="pswd" placeholder="Password" required />  
                            <p style={{ color: 'red' }} > {errors} </p>
                            {
                                error && <p>  {error.message} </p> 
                            } 
                            <button>Login</button>
                        </form>
                    </div>
                </div>

         }
            </div>

        </div>


    );
};


export default Login;