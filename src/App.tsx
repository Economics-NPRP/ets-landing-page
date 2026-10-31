import { Routes, Route, useLocation } from 'react-router'
import { AnimatePresence } from 'motion/react'
import LandingPage from './routes/landing-page/LandingPage.tsx'
import Tutorials from './routes/tutorials/Tutorials.tsx'
import TutorialTrack from './routes/tutorials/TutorialTrack.tsx'

// Keyed by pathname so each page's curtain plays on enter and exit.
const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/tutorials/firms' element={<TutorialTrack track="firm" />} />
        <Route path='/tutorials/government' element={<TutorialTrack track="government" />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
