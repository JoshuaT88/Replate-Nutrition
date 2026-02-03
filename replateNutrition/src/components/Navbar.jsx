import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/react.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <>
            {/* Mobile Top Bar - OUTSIDE nav so it stays visible */}
            <div className="navbar-mobile-top">
                <button className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <h2 className="navbar-mobile-title"><i className="fa-solid fa-sprout"></i> Replate Nutrition</h2>
                <div className="user-avatar">
                    <img src={image} alt="User" />
                </div>
            </div>

            {/* Mobile Overlay - Clickable to close menu */}
            {isMenuOpen && (
                <div className="navbar-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}

            {/* Desktop/Mobile Sidebar Navigation */}
            <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
                {/* Desktop Header */}
                <div className="navTopContainer">
                    <div className="navHeaderContainer">
                        <i className="fa-solid fa-sprout"></i>
                        <div className="navHeaderBox">
                            <h1 className="navHeader">Replate Nutrition</h1>
                            <p className="slogan">Perfect nutrition, simplified</p>
                        </div>
                    </div>
                </div>

                <div className="dividerLine"></div>

                {/* Mobile Close Button */}
                <button className="nav-close-btn" onClick={() => setIsMenuOpen(false)}>
                    <i className="fa-solid fa-square-xmark"></i>
                </button>

                {/* Navigation Links */}
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}><i className="fa-regular fa-house"></i>Home</NavLink>  
                    <NavLink to="/profiles" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-user-group" />Profiles</NavLink>
                    <NavLink to="/recommendations" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-arrow-trend-up"></i>Recommendations</NavLink> 
                    <NavLink to="/mealplan" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-calendar"></i>Meal Planning</NavLink> 
                    <NavLink to="/shopping" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-cart-shopping"></i>Shopping</NavLink>
                    <NavLink to="/trips" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-receipt"></i>Completed Trips</NavLink>
                    <NavLink to="/settings" onClick={() => setIsMenuOpen(false)}><i className="fa-solid fa-gear"></i>Settings</NavLink>
                </div>
            </nav>
        </>
    )
}