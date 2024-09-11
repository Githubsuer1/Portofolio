import { NavLink } from "react-router-dom"
import {useTheme} from '../ThemeContext'

const Work = ()=>{
    const {dark} = useTheme()
    return (
        <div className={`w-full ${dark?"bg-gray-800":"bg-white"} h-full p-5  grid justify-items-center gap-3`}>
        
        <div className="p-4 w-full max-w-xl grid grid-cols-1 sm:grid-cols-1 rounded justify-items-center gap-3">

        
           <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/React-Series/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Todo List </p>
                </NavLink>  
            </div>

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/TodoUsingRTK/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Todo Using RTK</p>
                </NavLink>  
            </div>

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/WeatherApp/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Weather App</p>
                </NavLink>  
            </div>  

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/Calculater/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Calculator</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/PasswordGenerator/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Password Generator</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/Currencyconverter/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Currency Converter</p>
                </NavLink>  
            </div> 

            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/Mosquito-Killing/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>Mosquito Kill</p>
                </NavLink>  
            </div> 
            
            <div className="w-full  max-w-sm">
            <NavLink 
                    to='https://githubsuer1.github.io/BMI-Generator/'
                    className={`${dark?"bg-white/40":"bg-purple-200"} shadow-2xl rounded  p-8  box-border flex flex-col gap-3 overflow-hidden`}  
                >
                    
                    <p className={`text-center py-2.5 ${dark?"text-white":"text-gray-800"} font-bold rounded`}>BMI Generator</p>
                </NavLink>  
            </div> 
            </div>
        </div>
    )
}

export default Work