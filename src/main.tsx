import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './routes/landing-page/LandingPage.tsx'
import Tutorials from './routes/tutorials/Tutorials.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
