// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './components/user/Login.tsx'
import Repos from './components/user/Repos.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='' element={<Login/>}/>
        <Route path='repos' element={<Repos/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
