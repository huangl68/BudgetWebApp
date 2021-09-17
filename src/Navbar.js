import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
	return (
	<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
		<Link to="/" className=" navbar-brand left-margin">Budget</Link>
			<ul className="navbar-nav mr-auto">
				<li className="navbar-item">
					<Link to="/" className="nav-link">Entries</Link>
				</li>
				<li className="navbar-item">
					<Link to="/dashboard" className="nav-link">DashBoard</Link>
				</li>
			</ul>
  </nav>
  )
}

export default Navbar;