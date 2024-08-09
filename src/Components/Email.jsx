import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Email = () => {
    const form = useRef()

    const handleSubmit = (event)=>{
        event.preventDefault()
        emailjs.sendForm('service_v89vd0l','template_8rs0aj7',form.current,{publicKey: 'gSxXfeVONYa5QEg8H'})
        .then(()=>alert("Message Sent successfuly."))
        .catch((error)=>alert(error.text))
    }


  return (
    <div className='w-full h-screen bg-gray-800 flex justify-center p-8'>
        
            <form onSubmit={handleSubmit} ref={form} className='w-full max-w-xl py-4'>

                <div className='w-full max-w-xl p-4 shadow-2xl'>

                    <div className='flex flex-col gap-2.5 w-full'>
                        <label htmlFor="name" className='text-green-300'>Name</label>
                        <input
                            name='from_name' 
                            className='p-2 rounded outline-none w-full'
                            id="name" 
                            type="text" 
                            placeholder='Enter Name' 
                        />
                    </div>

                    <div className='flex flex-col gap-2.5 mt-4'>
                        <label htmlFor="email" className='text-green-300'>Email</label>
                        <input 
                            name='from_email'
                            className='p-2 rounded outline-none '
                            id="email" 
                            type="email" 
                            placeholder='Enter Email' 
                        />
                    </div>

                    <div className='flex flex-col gap-2.5 mt-4'>
                        <label htmlFor="msg" className='text-green-300'>Message</label>
                        <input 
                            name='message'
                            className='p-2 rounded outline-none '
                            id="msg" 
                            type="text" 
                            placeholder='Enter Message' 
                        />
                    </div>

                    <div className='flex flex-col mt-8'>
                        <input
                            type="submit" 
                            value="Send" 
                            className=' rounded font-bold py-1.5 border-2 border-green-300 text-green-300'
                        />
                    </div>
            </div>
            </form>
        
    </div>
  )
}

export default Email