import {Link} from 'react-router-dom'

const Footer = ()=>{
    return (
        <div className="w-full bg-gray-800 text-white p-4 sm:fixed bottom-0 flex flex-col sm:flex-row sm:justify-between">
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