import React from "react";
import axios from "axios";
import {useQuery} from "react-query";
import styled from "styled-components";
import {Grid, Message} from "semantic-ui-react";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";

const StyledImage = styled.img`
    max-width: 80%;
    max-height: 80%;
    vertical-align: middle;
    line-height: 75px;
`;

const StyledCol = styled(Grid.Column)`
text-align: center`;

const SponsorDetails = (props) => {
    const size = (text) => {
        switch (text) {
            case 'top':
                return 16;
            case 'premium':
                return 8;
            case 'regular':
                return 5;
            default:
                return 3;
        }
    };

    return (<Grid container>
        <Grid.Row>
            <Grid.Column>
                <Message color={props.color}>{props.text.toUpperCase()}</Message>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            {props.sponsors.map((sponsor, index) => <StyledCol textAlign="center" width={size(props.text)} key={index}>
                <a href={sponsor.href}>
                    <StyledImage src={`https://www.jbcnconf.com/2020/${sponsor.image.src}`}
                                 alt={sponsor.image.alt}/></a>
            </StyledCol>)}
        </Grid.Row>
    </Grid>);
};

const Sponsors = () => {
    const fetchSponsors = async () => {
        const sponsors = await axios.get("http://localhost:3001/sponsors");
        return sponsors.data;
    };
    const {status, data} = useQuery("sponsors", fetchSponsors);
    return (<Container>
        <Divider/>
        <h3>Sponsors</h3>
        <p>Are you a technology company? Interested in meeting enthusiasts and geek people for technology?</p>
        <p>This is a <strong>priceless opportunity</strong> to participate in the first big Java and JVM conference in
            Spain, to promote
            your company and to support technological communities.</p>
        <p>Please contact us for more information for sponsoring at <a
            href="mailto:info@barcelonajug.org">info@barcelonajug.org</a></p>
        {status === "success" &&
        <div>
            <SponsorDetails key={1} text="top" color="red" sponsors={data.top}/>
            <SponsorDetails key={2} text="premium" color="orange" sponsors={data.premium}/>
            <SponsorDetails key={3} text="regular" color="blue" sponsors={data.regular}/>
            <SponsorDetails key={4} text="supporters" color="brown" sponsors={data.supporters}/>
        </div>
        }
    </Container>)
};

export default Sponsors;