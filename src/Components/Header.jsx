import { useState } from "react"
import {NavLink} from "react-router-dom"

const Header = ()=>{
    const [open,setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen((prev)=>!prev)
    }

    return (
        <nav className="bg-gray-800 flex flex-col sm:flex-row justify-between p-3.5  sm:sticky top-0">

            <div className="flex justify-between">
                <div className="flex items-center" >
                    <NavLink 
                    className="text-white text-md sm:text-xl font-bold" 
                    to='#'>
                    Siddhant Mishra</NavLink>
                </div>
        
                <div className="sm:hidden grid gap-1 border p-1 rounded" onClick={handleClick}>
                    <div className="w-7 border-2 bg-white rounded"></div>
                    <div className="w-7 border-2 bg-white rounded"></div>
                    <div className="w-7 border-2 bg-white rounded"></div>
                </div>
            </div>
            

            <div className={`sm:hidden ${!open ? "hidden" : "grid grid-cols-1 gap-2 mt-2"}`}>
            <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${ isActive ? 'text-red-500' : "text-white" }`} 
                    to='/contact'
                >
                Connect Me</NavLink>

                

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to=''
                >
                About Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/work'
                >
                Project</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/skills'
                >
                Skills</NavLink>
            </div>

            
            <div className={`w-[60%] hidden sm:grid grid-cols-4  items-center sm:justify-items-center gap-3 mt-2` }>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${ isActive ? 'text-red-500' : "text-white" }`} 
                    to='/contact'
                >
                Connect Me</NavLink>

                

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to=''
                >
                About Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/work'
                >
                Project</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/skills'
                >
                Skills</NavLink>
            </div>
        </nav>
    )
}

export default Header




