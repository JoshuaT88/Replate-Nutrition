import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Mealplan from './components/Mealplan'
import Profiles from './components/Profiles'
import Recommendations from './components/Recommendations'
import Settings from './components/Settings'
import Shopping from './components/Shopping'
import Trips from './components/Trips'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/mealplan" element={<Mealplan />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </main>
    </div>
    </BrowserRouter>
  )
}

export default App
