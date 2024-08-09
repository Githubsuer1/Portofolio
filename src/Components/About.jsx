import {Link} from 'react-router-dom'

const About = ()=>{
    return (
        <div className="w-full bg-gray-800 h-full sm:h-screen grid justify-items-center p-8">

            <div className="w-full max-w-3xl p-4  rounded gap-4 ">

                    <h1 
                        style={{fontFamily:"Monospace"}}
                        className="font-bold text-green-300 text-xl ">
                        Hi, my name is
                    </h1>
                    
                    <h1 className="font-bold text-3xl sm:text-4xl text-white/80 mt-5">Siddhant Mishra.</h1>
                

                <div className="mt-5">
                    <p className="text-justify text-white/40 text-lg">A Developer with a pasion for web Development. I'm a curious and creative individual with 
                    a drive to learn and explore new ideas. With a strong foundation in development, i have developed a unique perspective and 
                    skillset that enables me to approach problems with innovative solutions. On this website, you'll find a showcase of my projects,
                    skills, and experiences that demonstrate my capabilities and dedication to my craft. Take a Look about around, and let's connect if you'd 
                    like to collaborate or learn more about my work.
                    </p>
                </div>


                <div  className='w-full max-w-sm border-2 border-green-400 rounded p-4 mt-5'>
                    <Link 
                        style={{fontFamily:"Monospace"}}
                        className='text-green-400 text-lg'>
                        Download Resume
                    </Link>
                </div>
                
                
            </div>
        </div>
    )
}

export default About

