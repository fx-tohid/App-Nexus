import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layout/Root.jsx'
import Home from './components/Home/Home.jsx'
import AppLists from './components/AppLists/AppLists.jsx'
import AppDetails from './components/AppDetails/AppDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/', Component: Root, children: [
      { index: true, Component: Home },
      { path: '/apps', Component: AppLists, loader: () => fetch('/datas.json') },
      {path: '/apps/:id', Component: AppDetails, loader: () => fetch('/datas.json')}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
