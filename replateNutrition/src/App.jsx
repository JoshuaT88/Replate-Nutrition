import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
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
  const [profiles, setProfiles] = React.useState([
  { id: 1, name: 'Test', type: 'Human' },
  { id: 2, name: 'Test again', type: 'Pet' }
])

const [shoppingItems, setShoppingItems] = React.useState([
  { id: 1, name: 'Apples', quantity: 5 },
  { id: 2, name: 'Chicken', quantity: 2 },
  { id: 3, name: 'Rice', quantity: 1 }
])

const [meals, setMeals] = React.useState([
  { id: 1, name: 'Breakfast', date: '2026-02-03' },
  { id: 2, name: 'Lunch', date: '2026-02-03' },
  { id: 3, name: 'Dinner', date: '2026-02-03' },
  { id: 4, name: 'Breakfast', date: '2026-02-04' }
])

// Derived counts (the arithmetic you need)
const activeProfilesCount = profiles.length // = 2
const shoppingItemsCount = shoppingItems.length // = 3
const todaysMealsCount = meals.filter(meal => meal.date === new Date().toISOString().split('T')[0]).length // = 3
  return (
    <BrowserRouter>
    <div className="app-container">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Homepage 
        profilesCount={activeProfilesCount}
        shoppingItemsCount={shoppingItemsCount}
        todaysMealsCount={todaysMealsCount}
        profiles={profiles}
        />} />
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
