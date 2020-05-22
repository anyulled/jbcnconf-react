import React from "react";
import {Container, Grid, Segment} from "semantic-ui-react";
import {Blogger, FacebookCircle, Github, Instagram, Linkedin, Twitter, Youtube} from "@styled-icons/boxicons-logos";
import {Meetup} from "@styled-icons/fa-brands/Meetup";
import {Email} from "@styled-icons/evaicons-solid/Email";
import {InfoLargeOutline} from "@styled-icons/typicons/InfoLargeOutline";
import styled from "styled-components";

const InfoIcon = styled(InfoLargeOutline)`height: 16px`;

const Footer = () => {
    return (<Segment inverted vertical style={{padding: '5em 0 em'}}>
            <Container>
                <Grid inverted stackable divided>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <h2><InfoIcon/> contact</h2>
                            <p>Curious about something? Just drop us an email and we'll get back to you:</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column width={5}>
                            <h4>e-mail</h4>
                            <p><a href="mailto:info@barcelonajug.org"><Email/> info@barcelonajug.org</a></p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <h4>Social Media</h4>
                            <Grid container>
                                <Grid.Row>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank"
                                           href="https://facebook.com"><FacebookCircle/></a>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank"
                                           href="https://instagram.com"><Instagram/></a>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank"
                                           href="https://linkedin.com"><Linkedin/></a>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank"
                                           href="https://youtube.com"><Youtube/></a>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank"
                                           href="https://twitter.com"><Twitter/></a>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank" href="https://github.com"><Github/></a>
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <a rel="noopener noreferrer" target="_blank"
                                           href="https://blogger.com"><Blogger/></a>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <h4>Events</h4>
                            <p><a href="http://meetup.com/barcelonaJug" rel="noopener noreferrer"
                                  target="_blank"><Meetup/> Meetup</a></p>
                            <p><a href="https://www.barcelonajug.org" rel="noopener noreferrer"
                                  target="_blank">https://www.barcelonajug.org/</a></p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>

    );
};

export default Footer;