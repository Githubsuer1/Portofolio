import {Link} from 'react-router-dom'
import {useTheme} from '../ThemeContext'

const Footer = ()=>{
    const {dark} = useTheme()
    return (
        <div className={`w-full ${dark?"bg-gray-800 text-white":"bg-purple-400 text-gray-800"} p-4 sm:fixed bottom-0 flex flex-col sm:flex-row sm:justify-between`}>
            <div>
                <Link
                    className='hover:underline hover:text-red-400' 
                    to='/email'>
                    Send us Message
                </Link>
            </div>
            <div>All Rights reserved.</div>
        </div>
    )
}

export default Footer