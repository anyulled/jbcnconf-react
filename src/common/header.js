import React from 'react';
import {Link} from "react-router-dom";
import logo from "../img/logo-jbcnconf.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import {useQuery} from "react-query";

const Header = () => {
    const fetchMenu = async () => {
        const menu = await axios.get("http://localhost:3001/menu")
        return menu.data;
    };
    const {status, data} = useQuery("menu", fetchMenu);

    return status === "success" && <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand href="/#home">
            <img src={logo} alt="logo" height="64"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {data.map((link, index) => <Link key={index} className="nav-link" to={link.href}>{link.label}</Link>)}
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
};

export default Header;

