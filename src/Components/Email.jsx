import React from 'react'
import emailjs from 'emailjs-com'

const Email = () => {
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [msg,setMsg] = React.useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        const templateParams = {
            from_name:name,
            from_email:email,
            message:msg,
        };
        emailjs.send('service_drvh4mj','template_m4erg1c',templateParams,'gSxXfeVONYa5QEg8H')
        setEmail('')
        setName('')
        setMsg('')
    }


  return (
    <div className='w-full h-screen bg-gray-800 flex justify-center p-8'>
        
            <form onSubmit={handleSubmit} className='w-full max-w-xl py-4'>

                <div className='w-full max-w-xl p-4 shadow-2xl'>

                    <div className='flex flex-col gap-2.5 w-full'>
                        <label htmlFor="name" className='text-green-300'>Name</label>
                        <input 
                            className='p-2 rounded outline-none w-full'
                            id="name" 
                            type="text" 
                            placeholder='Enter Name' 
                            value={name} onChange={(e)=>setName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-2.5 mt-4'>
                        <label htmlFor="email" className='text-green-300'>Email</label>
                        <input 
                            className='p-2 rounded outline-none '
                            id="email" 
                            type="email" 
                            placeholder='Enter Email' 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col gap-2.5 mt-4'>
                        <label htmlFor="msg" className='text-green-300'>Message</label>
                        <input 
                            className='p-2 rounded outline-none '
                            id="msg" 
                            type="" 
                            placeholder='Enter Message' 
                            value={msg} 
                            onChange={(e)=>setMsg(e.target.value)}
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