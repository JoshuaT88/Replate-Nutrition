import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
         <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="/recommendations">Recommendations</Link>
            <Link to="/mealplan">Meal Planning</Link>
            <Link to="/shopping">Shopping</Link>
            <Link to="/trips">Completed Trips</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    )
}