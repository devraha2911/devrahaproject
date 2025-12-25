import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import HowToUse from './components/HowToUse/HowToUse.jsx'
import Benefits from './components/Benifits/Benifits.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/how-to-use",
        element: <HowToUse/>
      },
      {
        path: "/benefits",
        element: <Benefits/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
