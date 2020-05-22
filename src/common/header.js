import React from 'react';
import {Link} from "react-router-dom";
import logo from "../img/logo-jbcnconf.png";
import axios from "axios";
import {useQuery} from "react-query";
import {Menu} from "semantic-ui-react";

const Header = () => {
    const fetchMenu = async () => {
        const menu = await axios.get("http://localhost:3001/menu")
        return menu.data;
    };
    const {status, data} = useQuery("menu", fetchMenu);

    return status === "success" && <Menu inverted fixed="top" pointing stackable>
        <Menu.Item href="/#home">
            <img src={logo} alt="logo" height="64"/>
        </Menu.Item>
        {data.map((link, index) => <Menu.Item key={index}><Link to={link.href}>{link.label}</Link></Menu.Item>)}
    </Menu>;
};

export default Header;

