import { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/react.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
         <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            {/* Desktop Header */}
            <div className="navTopContainer">
                <div className="navHeaderContainer">
                    <i className="fa-solid fa-utensils"></i>
                    <div className="navHeaderBox">
                        <h1 className="navHeader">Replate Nutrition</h1>
                        <p className="slogan">Perfect Nutrition, Simplified</p>
                    </div>
                </div>
            </div>

            <div className="dividerLine"></div>

            {/* Mobile Top Bar */}
            <div className="navbar-mobile-top">
                <button className="hamburger-btn" onClick={toggleMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <h2 className="navbar-mobile-title">Replate Nutrition</h2>
                <div className="user-avatar">
                    <img src={image} alt="User" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    
                <Link to="/" onClick={() => setIsMenuOpen(false)}><i className="fa-regular fa-house"></i>Home</Link>  
                <Link to="/profiles" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-user-group" />Profiles</Link>
                <Link to="/recommendations" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-arrow-trend-up"></i>Recommendations</Link> 
                <Link to="/mealplan" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-calendar"></i>Meal Planning</Link> 
                <Link to="/shopping" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-cart-shopping"></i>Shopping</Link>
                <Link to="/trips" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-receipt"></i>Completed Trips</Link>
                <Link to="/settings" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-gear"></i>Settings</Link>
                
                
            </div>
        </nav>
    )
}