import {NavLink} from 'react-router-dom'
import {useTheme} from '../ThemeContext'

const Contact = ()=>{
    const {dark} = useTheme();

    return (
        <div className={`p-4 w-full h-full md:h-screen 
        ${dark?"bg-gray-800":"bg-white"} 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-3 justify-items-center`}
        >

            <NavLink 
            to='https://www.linkedin.com/in/siddhant-mishra-6ba3b9224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            className='w-full max-w-sm rounded shadow-2xl p-8 h-96  box-border flex flex-col gap-3 overflow-hidden'
            >
                <img 
                src="https://media.licdn.com/dms/image/D5603AQFfHS8dUV_Zzg/profile-displayphoto-shrink_800_800/0/1690552724008?e=1727308800&v=beta&t=M7B7YDeEaFa_k_bbCnXtH9KV95NJcTYStNMeUX4cTN0" 
                alt="" 
                className={`rounded-lg h-96 overflow-hidden w-full ${dark?"border-green-300 border-2":"border-blue-400 border-2"}`}
                />
                <p className={`text-center py-1.5 border-2 ${dark?"border-green-300 text-green-300":"border-blue-400 text-blue-400"} font-bold rounded`}>LinkedIn</p>
            </NavLink>
                
            {/* Github profile link */}
            <NavLink 
            to="https://github.com/Githubsuer1"
            className='w-full max-w-sm  rounded shadow-2xl p-8 h-96  box-border flex flex-col gap-3 overflow-hidden'
            >
                <img 
                src="https://avatars.githubusercontent.com/u/123529344?s=400&u=a28dccb6ff3e8547ed64714dc77fcfa034a67510&v=4" 
                alt="" 
                className={`rounded-lg h-96 overflow-hidden w-full ${dark?"border-green-300 border-2":"border-blue-400 border-2"}`}
                />
                <p className={`text-center py-1.5 border-2 ${dark?"border-green-300 text-green-300":"border-blue-400 text-blue-400"} font-bold rounded`}>Github</p>
            </NavLink>

            {/* Twitter */}
            <NavLink 
            to='https://x.com/sidd_mis?t=okxZLHouGdevsrajTvhtYQ&s=08'
            className='w-full max-w-sm  rounded shadow-2xl p-8 h-96  box-border flex flex-col gap-3 overflow-hidden'
            >
                <img 
                src="https://media.licdn.com/dms/image/D5603AQFfHS8dUV_Zzg/profile-displayphoto-shrink_800_800/0/1690552724008?e=1727308800&v=beta&t=M7B7YDeEaFa_k_bbCnXtH9KV95NJcTYStNMeUX4cTN0" 
                alt="" 
                className={`rounded-lg h-96 overflow-hidden w-full ${dark?"border-green-300 border-2":"border-blue-400 border-2"}`}
                />
                <p className={`text-center py-1.5 border-2 ${dark?"border-green-300 text-green-300":"border-blue-400 text-blue-400"} font-bold rounded`}>X</p>
            </NavLink>

            <NavLink 
            to='https://www.facebook.com/siddhant.mishra.106902?mibextid=rS40aB7S9Ucbxw6v'
            className='w-full max-w-sm rounded shadow-2xl p-8 h-96  box-border flex flex-col gap-3 overflow-hidden'
            >
                <img 
                src="https://avatars.githubusercontent.com/u/123529344?s=400&u=a28dccb6ff3e8547ed64714dc77fcfa034a67510&v=4" 
                alt="" 
                className={`rounded-lg h-96 overflow-hidden w-full ${dark?"border-green-300 border-2":"border-blue-400 border-2"}`}
                />
                <p className={`text-center py-1.5 border-2 ${dark?"border-green-300 text-green-300":"border-blue-400 text-blue-400"} font-bold rounded`}>FaceBook</p>
            </NavLink>
        </div>
    )
}

export default Contact