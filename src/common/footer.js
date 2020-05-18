import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import {Instagram, FacebookCircle, Twitter, Linkedin, Youtube, Github, Blogger} from "@styled-icons/boxicons-logos";
import {Meetup} from "@styled-icons/fa-brands/Meetup";
import {Email} from "@styled-icons/evaicons-solid/Email";
import {InfoLargeOutline} from "@styled-icons/typicons/InfoLargeOutline";

const BlackContainer = styled(Container)`
h1 svg{
height: 32px;
}
svg{
height: 24px;
color: ghostwhite;
margin-left: 5px;
}
a{
color: ghostwhite;
}
p{
color:snow;
line-height: 0.8em;
}
`;

const Footer = () => {
    return (<BlackContainer>
        <Row>
            <Col>
                <h2><InfoLargeOutline/> contact</h2>
                <p>Curious about something? Just drop us an email and we'll get back to you:</p>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <h4>e-mail</h4>
                <p><a href="mailto:info@barcelonajug.org"><Email/> info@barcelonajug.org</a></p>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <h4>Social Media</h4>
                <Row>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://facebook.com"><FacebookCircle/></a>
                    </Col>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://instagram.com"><Instagram/></a>
                    </Col>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://linkedin.com"><Linkedin/></a>
                    </Col>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://youtube.com"><Youtube/></a>
                    </Col>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com"><Twitter/></a>
                    </Col>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://github.com"><Github/></a>
                    </Col>
                    <Col xs={1}>
                        <a rel="noopener noreferrer" target="_blank" href="https://blogger.com"><Blogger/></a>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <h4>Events</h4>
                <p><a href="http://meetup.com/barcelonaJug" rel="noopener noreferrer"
                      target="_blank"><Meetup/> Meetup</a></p>
                <p><a href="https://www.barcelonajug.org" rel="noopener noreferrer"
                      target="_blank">https://www.barcelonajug.org/</a></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="text-center">
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                        <img alt="Creative Commons License" style={{borderWidth: 0}}
                             src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/>
                    </a>
                </p>
                <p className="text-center">JBCNConf and BCN JUG logo(s) are licensed under</p>
                <p className="text-center">
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
                        Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
                    </a></p>
                <p className="text-center">© {new Date().getFullYear()} Barcelona JUG.</p>
                <p className="text-center">All Rights Reserved.</p>
            </Col>
        </Row>
    </BlackContainer>);
};

export default Footer;