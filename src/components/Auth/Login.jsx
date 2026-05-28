import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input required className='  outline-none 
                                    bg-transparent 
                                    border-2
                                  border-emerald-600 
                                    py-3 
                                    px-5 
                                    rounded-full
                                  placeholder:text-grey-400' 

                    type="email" placeholder='Enter you email' />

                <input required className='  outline-none
                                    bg-transparent 
                                    border-2
                                  border-emerald-600 
                                    py-3 
                                    px-5 
                                    rounded-full
                                  placeholder:text-grey-400
                                    mt-3'

                    type="password" placeholder='Enter Password' />
                    
                <button className='text-white 
                                    outline-none 
                                    border-none
                                  bg-emerald-600
                                    py-3 
                                    px-5 
                                    rounded-full
                                  placeholder:text-white
                                    mt-5'>Login</button>
            </form>
        </div>      
    </div>
  )
}

export default Login
