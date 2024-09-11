import {Link} from 'react-router-dom'
import {useTheme} from '../ThemeContext'

const About = ()=>{
    const {dark,setDark} = useTheme()
    return (
        <div className={` ${dark?"bg-gray-800":"bg-white/40 text-gray-800"} w-full h-full sm:h-screen grid justify-items-center p-8`}>

            <div className="w-full max-w-3xl p-4  rounded gap-4 ">

                    <h1 
                        style={{fontFamily:"Monospace"}}
                        className={`font-bol text-xl ${dark?"text-green-300":"text-gray-800"}`}>
                        Hi, my name is
                    </h1>
                    
                    <h1 className={`${dark?"text-white/40":"text-gray-800"} font-bold text-3xl sm:text-4xl mt-5`}>Siddhant Mishra.</h1>
                

                <div className="mt-5">
                    <p className={`text-justify ${dark?"text-white/40":"text-gray-800"} text-lg`}>A Developer with a pasion for web Development. I'm a curious and creative individual with 
                    a drive to learn and explore new ideas. With a strong foundation in development, i have developed a unique perspective and 
                    skillset that enables me to approach problems with innovative solutions. On this website, you'll find a showcase of my projects,
                    skills, and experiences that demonstrate my capabilities and dedication to my craft. Take a Look about around, and let's connect if you'd 
                    like to collaborate or learn more about my work.
                    </p>
                </div>


                <div  className='w-full max-w-sm border-2 border-green-400 rounded p-4 mt-5'>
                    <Link 
                        style={{fontFamily:"Monospace"}}
                        className={`${dark?"text-green-400":"text-gray-800"} text-lg`}>
                        Download Resume
                    </Link>
                </div>
                
                
            </div>
        </div>
    )
}

export default About

