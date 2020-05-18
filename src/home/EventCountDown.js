import React from "react";
import Countdown from 'react-countdown';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const StyledCounter = styled(Col)`
  border-radius: 5px;
  border:1px solid white;
  text-align: center;
  color: white;
  background: linear-gradient(to bottom, rgba(201,222,150,1) 0%,rgba(138,182,107,1) 44%,rgba(57,130,53,1) 100%);
`;

const StyledCountDown = styled(Col)`
  font-family: Pacifico, sans-serif;
  font-weight: lighter;
`;

const Completed = () => <span>Event is on!</span>;
const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        return <Completed/>;
    } else {
        return <Container>
            <Row>
                <StyledCountDown lg={4} md={12} className="text-center">Great speakers with great topics. Save the date!</StyledCountDown>
                <StyledCounter lg={2} md={3} sm={12} xs={12}>{days} <br/> Days</StyledCounter>
                <StyledCounter lg={2} md={3} sm={12} xs={12}>{hours} <br/>Hours</StyledCounter>
                <StyledCounter lg={2} md={3} sm={12} xs={12}>{minutes} <br/>Minutes</StyledCounter>
                <StyledCounter lg={2} md={3} sm={12} xs={12}>{seconds} <br/>Seconds</StyledCounter>
            </Row>
        </Container>;
    }
};
const EventCountDown = () => {
    return <Countdown date={new Date(2020, 9, 7)} renderer={renderer}/>;
}

export default EventCountDown;