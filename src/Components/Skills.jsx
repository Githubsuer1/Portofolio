import {useTheme} from '../ThemeContext'

function Skills(){
    const {dark} = useTheme()

    return (
        <div className={`w-full h-full sm:h-screen ${dark?"bg-gray-800 text-white":"bg-white text-gray-800"} p-8`}>

            <div className="w-full h-full md:screen grid justify-items-center grid-rows-1 rounded ">

                <div className="w-full max-w-lg p-5 h-full shadow-2xl bg-white/20 rounded">

                    <h1 className={`order-2 ${dark?"border-green-300 text-green-300":"text-black border-black"} border-2 py-1.5 px-4 rounded font-bold`}>Skills</h1>

                        <div className="p-4">
                            <h1 className="bg-transparent font-bold ">Technology</h1>
                            <ul className="list-disc ">
                                <li>HTML</li>
                                <li>Tailwind CSS (Responsive Design, Utility first approach)</li>
                                <li>Javascript (DOM Manipulation, Event Handling, Objects)</li>
                                <li>React (Hooks, React Router, Redux Toolkit, Context API)</li>
                                <li>Python (OOP,Data types, Functions, Operators)</li>
                                <li>Djangp (Model, View, Template, Authentication) </li>
                                <li>Git and github</li>
                            </ul>

                        </div>

                        <div className="p-4"> 
                            <h1 className="bg-transparent font-bold ">Tools</h1>
                            <ul className="list-disc ">
                                <li>IDE: VS Code</li>
                                <li>Version Control: Git</li>
                            </ul> 
                        </div>
                    

                        {/* <div className="p-4">
                            <h1 className="bg-transparent font-bold ">Certification</h1>
                            <ul className="list-disc">
                                <li>Course: Python Full Stack Web Developer Bootcamp</li>
                                <li>Duration: 32 Hours</li>
                                <li>Instructor: Jose Portila</li>
                                <li>Plateform: Udemy</li>
                                
                            </ul>
                        </div> */}


                </div>

                
            </div>
        </div>
    )
}

export default Skills