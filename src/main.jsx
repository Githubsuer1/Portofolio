import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Work from './Components/Work.jsx'
import Skills from './Components/Skills.jsx'
import Email from './Components/Email.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
        {
          path:'',
          element:<About />
        },
      
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/work',
        element:<Work />
      },
      {
        path:'/skills',
        element:<Skills />
      },
      {
        path:'/email',
        element:<Email />
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>,
)
