import * as React from 'react';
import EventCountDown from "./EventCountDown";
import Sponsors from "../sponsors/Sponsors";
import Articles from "../article/Articles";
import Speakers from "../speakers/Speakers";
import {Button, Container, Message} from "semantic-ui-react";

/*const StyledJumbotron = styled(Jumbotron)`
  margin-top: 90px;
  background-image: url("https://www.jbcnconf.com/2020/assets/img/homepage/java_barcelona_conference_1.jpg");
  background-size: cover;
h1 {
  text-shadow: 2px -2px black;
  color: ghostwhite;
  font-family: Pacifico, sans-serif;
}
h2 { 
  text-shadow: 2px -2px rgba(255,255,255,0.5);
  font-family: Montserrat,sans-serif;
}
h4 {
  font-family: Roboto, sans-serif;
}
button {
  text-shadow: 1px 1px rgba(200,200,200,0.5);
  box-shadow: 2px 2px rgba(0,0,0,0.2);
}
p {
  color: white;
  text-shadow: 1px 1px rgba(50, 50, 50, 0.8);
}
a {
  color: white;
`
}*/
export const Home = () => {
    return (<Container>
        <Message>
            <h1 className="text-center">JBcnConf</h1>
            <h2 className="text-center">7-8-9</h2>
            <h2 className="text-center">September 2020</h2>
            <h4 className="text-center">JVM & TECH</h4>
            <p className="text-center">Past Events: <a href="https://www.jbcnconf.com/2019">2019</a>,
                <a href="https://www.jbcnconf.com/2018">2018</a>,&nbsp;
                <a href="https://www.jbcnconf.com/2017">2017</a>,&nbsp;
                <a href="https://www.jbcnconf.com/2016">2016</a>,&nbsp;
                <a href="https://www.jbcnconf.com/2015">2015</a>
            </p>
            <p className="text-center">
                <Button primary href="https://www.jbcnconf.com/2020/covid19.html">COVID-19 change
                    dates</Button>
            </p>
            <p className="text-center">
                <Button secondary href="https://www.jbcnconf.com/2020/callForPapers.html">Call for
                    papers</Button>&nbsp;
                <Button color="yellow" href="https://tickets.jbcnconf.com/event/2020/">Buy your
                    ticket!</Button>&nbsp;
                <Button color="grey" href="https://blog.jbcnconf.com/">visit our blog</Button>
            </p>
        </Message>
        <EventCountDown/>
        <Articles/>
        <Speakers/>
        <Sponsors/>
    </Container>);
};