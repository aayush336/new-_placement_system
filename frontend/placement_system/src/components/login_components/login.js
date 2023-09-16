import React from 'react'
import loginImg from '../../assests/login_bg.jpg';
import {useNavigate} from 'react-router-dom';
import {  useState } from "react";
import axios from 'axios';



function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate =useNavigate();

    function gotoSignUp(){
        navigate('/signUp');
    }

    async function login(event){
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/students/login",{
            email:email,
            password:password,
            }).then((res)=>
            {
                console.log(res.data);
                if(res.data.message=="Email not exists"){
                    alert("Email do not exists");
                }
                else if (res.data.message=="Login Success"){
                    navigate('/dashboard');
                }
                else{
                    alert("Incorrect email and Password.");
                }
            },fail=>{console.error(fail);});
        } catch (err) {
            alert(err);
        }
    }

  return (
    <div className='grid  grid-cols-2 sm:grid-cols2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover'src={loginImg} alt="Background Image"/>
        </div>

        <div className='bg-bg-color-primary flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto drop-shadow-lg p-4 rounded-lg bg-white'>
                
                <h2 className='p-2 text-4xl font-bold text-center text-bg-color-secondary'>Sign In</h2>
                <div className='flex flex-col py-4'>
                    <label className='text-bg-color-primary flex text-bg-color-secondary'>User Email</label>
                    <input className ='px-2 drop-shadow-lg rounded-lg py-2' type='email' placeholder="Enter your user Email."
                     value={email}
                     onChange={(event) => {
                       setEmail(event.target.value);
                     }}
                    />
                </div>
                <div className ='flex flex-col py-4'>
                    <label className ='flex text-bg-color-primary text-bg-color-secondary'>Password</label>
                    <input className ='px-2 drop-shadow rounded-lg py-2' type='password' placeholder="Enter password."
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    />
                </div>

                <div>
                    <button className='rounded-lg px-8 py-2 mt-2 bg-chocolate-brown text-white' onClick={login}>Login</button>
                </div>
                <div className='grid grid-cols-2 mt-8'>
                    <div className ='flex p-2'>
                    <p className ='flex-1'>Forgot Password?</p>
                    </div>
                    <div className ='flex p-2'>
                    <p className ='flex-1 hover:text-2xl text-bg-color-secondary ' onClick={gotoSignUp}>Create Account</p>
                    </div> 
                

                </div>
                

            </form>
        </div>
    </div>
  )
}

export default Login
