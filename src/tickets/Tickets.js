import React from "react";
import {Grid, Step} from "semantic-ui-react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";

const Tickets = () => {
    return (<Container text>
            <Divider/>
            <h3>Buy a ticket</h3>
            <p>Do not miss the opportunity to participate in this event and to immerse yourself in 3-days interesting
                talks on Java, JVM and open-source technologies.
            </p>
            <p>Check the <a href="/#terms">terms and conditions</a></p>
            <Grid>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Step.Group>
                            <Step>
                                <Icon name="ticket"/>
                                <Step.Content>
                                    <Step.Title>Grab your ticket!</Step.Title>
                                    <Step.Description>click here to buy your ticket</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step active>
                                <Icon name="payment"/>
                                <Step.Content>
                                    <Step.Title>Buy your Ticket</Step.Title>
                                    <Step.Description>Enter billing information</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step>
                                <Icon name='info'/>
                                <Step.Content>
                                    <Step.Title>Confirm Order</Step.Title>
                                    <Step.Description>
                                        <a href="https://tickets.jbcnconf.com/?_ga=2.122168200.2060686697.1590143041-131144751.1590143041">buy your ticket</a>
                                    </Step.Description>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Tickets;
