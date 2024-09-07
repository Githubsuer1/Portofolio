import { NavLink } from "react-router-dom"

const Work = ()=>{
    return (
        <div className="w-full bg-gray-800 h-full p-5  grid justify-items-center gap-3">
        
        <div className="p-4 w-full max-w-xl grid grid-cols-1 sm:grid-cols-1 rounded justify-items-center gap-3">

        
           <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/React-Series/'
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5   text-green-300 rounded'>Todo List </p>
                </NavLink>  
            </div>

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/TodoUsingRTK/'
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5   text-green-300 rounded'>Todo Using RTK</p>
                </NavLink>  
            </div>

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/WeatherApp/'
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5   text-green-300 rounded'>Weather App</p>
                </NavLink>  
            </div>  

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/Calculater/'
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5   text-green-300 rounded'>Calculator</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/PasswordGenerator/'
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5  text-green-300 rounded'>Password Generator</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/Currencyconverter/'
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5   text-green-300 rounded'>Currency Converter</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/Mosquito-Killing/'
                    className=' bg-white/40 rounded shadow-2xl p-8  box-border flex flex-col gap-3 overflow-hidden'
                >
                    <p className='text-center py-2.5   text-green-400 rounded'>Mosquito Kill</p>
                </NavLink>  
            </div> 
            
            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/BMI-Generator/'
                    className=' bg-white/40 rounded shadow-2xl p-8   box-border flex flex-col gap-3 overflow-hidden'
                >
                    
                    <p className='text-center py-2.5  border-green-300 text-green-300 rounded'>BMI Generator</p>
                </NavLink>  
            </div> 
            </div>
        </div>
    )
}

export default Work