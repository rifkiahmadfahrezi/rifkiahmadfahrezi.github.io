import React , { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = lazy(() => import('./components/pages/App'))
const ContactPage = lazy(() => import('./components/pages/ContactPage'))
import Preloader from './UI/preloader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<Preloader/> }>
                <App />
            </Suspense>,
  },
  {
    path: '/contact',
    element: <Suspense fallback={<Preloader/> }>
                <ContactPage  />
            </Suspense>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
