import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { NuqsAdapter } from 'nuqs/adapters/react'
import './index.css'
import LandingPage from './routes/landing-page/LandingPage.tsx'
import Tutorials from './routes/tutorials/Tutorials.tsx'
import FirmTutorials from './routes/tutorials/firm/FirmTutorials.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/tutorials/firms' element={<FirmTutorials />} />
        </Routes>
      </BrowserRouter>
    </NuqsAdapter>
  </StrictMode>,
)
