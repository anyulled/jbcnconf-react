import React from "react";
import Countdown from 'react-countdown';
import styled from "styled-components";
import {Container, Grid} from "semantic-ui-react";

const StyledCounter = styled(Grid.Column)`
  border-radius: 5px;
  border: none;
  text-align: center;
  color: white;
  box-shadow: 1px 3px rgba(0,0,0,0.5);
  padding:10px 0;
  background: linear-gradient(to bottom, rgba(201,222,150,1) 0%,rgba(138,182,107,1) 44%,rgba(57,130,53,1) 100%);
`;

const StyledCountDown = styled(Grid.Column)`
  font-family: Merienda one, sans-serif;
  font-weight: normal;
`;

const Completed = () => <span>Event is on!</span>;
const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        return <Completed/>;
    } else {
        return <Container>
            <Grid>
                <Grid.Row>
                    <StyledCountDown textAlign="center" width={8}>Great speakers with great topics. Save the
                        date!</StyledCountDown>
                    <StyledCounter width={2}>{days} <br/> Days</StyledCounter>
                    <StyledCounter width={2}>{hours} <br/>Hours</StyledCounter>
                    <StyledCounter width={2}>{minutes} <br/>Minutes</StyledCounter>
                    <StyledCounter width={2}>{seconds} <br/>Seconds</StyledCounter>
                </Grid.Row>
            </Grid>
        </Container>;
    }
};
const EventCountDown = () => {
    return <Countdown date={new Date(2020, 9, 7)} renderer={renderer}/>;
}

export default EventCountDown;