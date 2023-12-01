import React,{ useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/main.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
	const navRef = useRef();
  const navigate = useNavigate()

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const handleLogout = async() => {
    const response = await axios.get(`${import.meta.env.VITE_APP_URI}/admin/logout`)
    if(response.status == 200){
      localStorage.removeItem("token")
      navigate("/login")
    }
  }

	return (
		<header>
			<h3>Devam Enterprise</h3>
			<nav ref={navRef}>
				<Link to="/admin">Home</Link>
				<Link to="/admin/add">Add Device</Link>
				<Link to="/admin/viewproducts">View available devices</Link>
				<Link to="/admin/viewproducts/sold">View sold products</Link>
        <Link to="#" onClick={handleLogout}>Logout</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;