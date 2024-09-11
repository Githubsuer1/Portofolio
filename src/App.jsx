import Header from './Components/Header'
import Footer from './Components/Footer'
import {Outlet} from 'react-router-dom'
import ThemeProvider from './ThemeContext'
import { useTheme } from './ThemeContext'
import { useState } from 'react'


function App() {
  const [dark,setDark] = useState(false);

  
  return (
    <ThemeProvider value={{dark,setDark}}>
     <Header />
     <Outlet />
     <Footer />
    </ThemeProvider>
  )
}

export default App
