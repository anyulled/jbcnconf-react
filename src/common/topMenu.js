import React from 'react';
import axios from "axios";
import {useQuery} from "react-query";
import {Dropdown, Menu} from "semantic-ui-react";

const MenuItem = ({index, link: {href, label}}) => {
    return (<Menu.Item key={index}><a href={href}>{label}</a></Menu.Item>);
};

const DropdownItem = ({items, label}) => {
    return <Dropdown item text={label}>
        <Dropdown.Menu>
            {items.map((item, index) => <Dropdown.Item key={index} href={item.href}>{item.label}</Dropdown.Item>)}
        </Dropdown.Menu>
    </Dropdown>;
};

const TopMenu = () => {
    const fetchMenu = async () => {
        const menu = await axios.get("http://localhost:3001/menu")
        return menu.data;
    };
    const {status, data} = useQuery("menu", fetchMenu);

    const renderItem = (link, index) => {
        if (link.items) {
            return <DropdownItem items={link.items} label={link.label}/>
        }
        return <MenuItem link={link} index={index}/>;

    };

    const isOk = () => status === "success";

    return isOk() && <Menu inverted fixed="top" pointing stackable>
        <Menu.Item header>JBCNConf</Menu.Item>
        {data.map((link, index) => renderItem(link, index))}
    </Menu>;
};

export default TopMenu;

