import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<Navbar bg="primary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand onClick={() => navigate("/")}>Wakers</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
					<Nav.Link onClick={() => navigate("/users")}>Users</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
