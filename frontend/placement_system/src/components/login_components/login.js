import React from 'react'
import loginImg from '../../assests/login_bg.jpg';
function Login() {
  return (
    <div className='grid  grid-cols-2 sm:grid-cols2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover'src={loginImg} alt="Background Image"/>
        </div>

        <div className='bg-bg-color-primary flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto border-4 p-4 rounded-lg border-chocolate-brown bg-bg-color-secondary'>
                
                <h2 className='p-2 text-4xl font-bold text-center text-bg-color-primary'>Sign In</h2>
                <div className='flex flex-col py-4'>
                    <label className='text-bg-color-primary '>User Name</label>
                    <input className =' rounded-lg'type='text'/>
                </div>
                <div className ='flex py-4'>
                    <label className ='flex-1 text-bg-color-primary'>Password</label>
                    <input className ='flex-1 border' type='password'/>
                </div>
                <div className ='flex p-2'>
                   <p className ='flex-1'>Forgot Password?</p>
                </div>
                <div className ='flex p-2'>
                   <p className ='flex-1'>Create Account</p>
                </div> 
                

            </form>
        </div>
    </div>
  )
}

export default Login
