import { useState } from "react"
import {NavLink} from "react-router-dom"
import { useTheme } from "../ThemeContext"

const Header = ()=>{
    const [open,setOpen] = useState(false)

    const {dark,setDark} = useTheme()

    const handleClick = ()=>{
        setOpen((prev)=>!prev)
    }

    // function to switch theme from dark to light
    const ChangeTheme = ()=>{
            setDark((prev)=>!prev)
        }

    return (
        // navbar of the site
        <nav className={`${dark?"bg-gray-800":"bg-purple-300"} flex flex-col sm:flex-row justify-between p-3.5  sm:sticky top-0`}>


            <div className="flex justify-between">

                {/* theme switcher */}
                <div className={`${dark?"":"border-gray-800"} flex items-center justify-center border-2 rounded-lg px-2.5`} >
                    <button 
                    className={`${dark?"text-white":"text-gray-800"} text-md sm:text-xl font-bold`} 
                    onClick={ChangeTheme}
                    >
                    {dark?"Light":"Dark"}
                    </button>
                </div>

                {/* this clickable div will be hidden for larger device and visible for smaller device */}
                <div className={`${dark?"border-white":"border-gray-800"} sm:hidden grid gap-1 border p-1 rounded`} onClick={handleClick}>
                    <div className={`w-7 border-2 ${dark?"bg-white":"bg-gray-800"} rounded`}></div>
                    <div className={`w-7 border-2 ${dark?"bg-white":"bg-gray-800"} rounded`}></div>
                    <div className={`w-7 border-2 ${dark?"bg-white":"bg-gray-800"} rounded`}></div>
                </div>

            </div>
            
            {/* this will be going to show when width will be smaller otherwise will be hidden */}
            <div className={`sm:hidden  ${!open ? "hidden" : "grid grid-cols-1 gap-2 mt-2 "}`}>
                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${ isActive ? 'text-red-500' : "text-white" }`} 
                    to='/contact'
                >Connect Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to=''
                >About Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/work'
                >Work</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent bg-gray-600 text-white text-md sm:text-lg font-bold px-1.5 rounded 
                    ${isActive ? "text-red-500" : "text-white" }`} 
                    to='/skills'
                >Skills</NavLink>
            </div>

            
            {/* this will going to show when the width will be larger otherwise will be hidden */}
            <div className={`w-[60%] hidden sm:grid grid-cols-4  items-center sm:justify-items-center gap-3 mt-2` }>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent ${dark?"text-white":"text-gray-800"}  text-md sm:text-lg font-bold px-1.5 rounded 
                    `} 
                    to='/contact'
                >Connect Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent ${dark?"text-white":"text-gray-800"}  text-md sm:text-lg font-bold px-1.5 rounded 
                    `} 
                    to=''
                >About Me</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent ${dark?"text-white":"text-gray-800"}  text-md sm:text-lg font-bold px-1.5 rounded 
                    `} 
                    to='/work'
                >Work</NavLink>

                <NavLink 
                    className={({isActive})=>`sm:bg-transparent ${dark?"text-white":"text-gray-800"}  text-md sm:text-lg font-bold px-1.5 rounded 
                    `} 
                    to='/skills'
                >Skills</NavLink>
            </div>
        </nav>
    )
}

export default Header




