import * as React from 'react';
import EventCountDown from "./EventCountDown";
import Sponsors from "../sponsors/Sponsors";
import Articles from "../article/Articles";
import Speakers from "../speakers/Speakers";
import {Button, Container, Header, Segment, Image} from "semantic-ui-react";
import logo from "../img/logo-jbcnconf.png";
import styled from "styled-components";
import Tickets from "../tickets/Tickets";

const StyledSegment = styled(Segment)`
  min-height:700px;
  padding:1em 0;
  background-image: url("https://www.jbcnconf.com/2020/assets/img/homepage/java_barcelona_conference_1.jpg")!important;
  background-size: cover;
h1 {
  text-shadow: 2px -2px black;
  color: ghostwhite;
  font-family: Pacifico, sans-serif;
}
h2 { 
  text-shadow: 2px -2px rgba(100,100,100,0.5);
  font-family: Montserrat,sans-serif;
}
h4 {
  font-family: Roboto, sans-serif;
}
a.button {
  text-shadow: 1px 1px rgba(200,200,200,0.5);
  box-shadow: 2px 2px rgba(0,0,0,0.2);
}
p {
  color: white;
  text-shadow: 1px 1px rgba(50, 50, 50, 0.8);
  margin: 10px 0;
}
a {
  color: white;
`;
export const Home = () => {
    return (<>
        <StyledSegment inverted textAlign="center" vertical>
            <Image src={logo} centered style={{marginTop: '3em'}}/>
            <Header inverted as="h1" content="JBcnConf" style={{
                fontFamily: 'Merienda One, sans-serif',
                fontWeight: 'normal',
                fontSize: '4em',
                marginBottom: 0
            }}/>
            <Header as="h2" content="7 - 8 - 9" inverted style={{
                fontFamily: 'Merienda One, sans-serif',
                fontWeight: 'normal',
                fontSize: '1.7em',
                marginTop: '1.5em'
            }}/>
            <Header as="h2" content="September" inverted style={{
                fontFamily: 'Merienda One, sans-serif',
                fontWeight: 'normal',
                fontSize: '1.7em',
                marginTop: '0.5em'
            }}/>
            <Header as="h4" content="JVM & Tech"/>
            <EventCountDown/>
            <p className="text-center">
                Past Events: <a href="https://www.jbcnconf.com/2019">2019</a>,
                <a href="https://www.jbcnconf.com/2018">2018</a>,&nbsp;
                <a href="https://www.jbcnconf.com/2017">2017</a>,&nbsp;
                <a href="https://www.jbcnconf.com/2016">2016</a>,&nbsp;
                <a href="https://www.jbcnconf.com/2015">2015</a>
            </p>
            <p>
                <Button content="COVID-19 change dates" primary href="https://www.jbcnconf.com/2020/covid19.html"/>
            </p>
            <Button.Group>
                <Button color="red" href="https://www.jbcnconf.com/2020/callForPapers.html" content="Call for papers"/>
                <Button color="yellow" href="https://tickets.jbcnconf.com/event/2020/" content="Buy your ticket!"/>
                <Button color="grey" href="https://blog.jbcnconf.com/" content="visit our blog"/>
            </Button.Group>
        </StyledSegment>
        <Container>

            <Articles/>
            <Speakers/>
            <Tickets/>
            <Sponsors/>
        </Container>
    </>);
};