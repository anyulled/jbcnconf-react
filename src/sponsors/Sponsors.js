import React from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import axios from "axios";
import {useQuery} from "react-query";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const StyledImage = styled.img`
    max-width: 80%;
    max-height: 80%;
    vertical-align: middle;
    line-height: 75px;
`;

const StyledCol = styled(Col)`
text-align: center`;

const SponsorDetails = (props) => {
    const size = (text) => {
        switch (text) {
            case 'top':
                return 12;
            case 'premium':
                return 6;
            case 'regular':
                return 4;
            default:
                return 2;
        }
    };

    return (<Container>
        <Row>
            <Col sm={12}>
                <Alert variant={props.variant}>{props.text.toUpperCase()}</Alert>
            </Col>
        </Row>
        <Row>
            {props.sponsors.map((sponsor, index) => <StyledCol sm={size(props.text)} xs={12} key={index}>
                <a href={sponsor.href}>
                    <StyledImage src={`https://www.jbcnconf.com/2020/${sponsor.image.src}`}
                                 alt={sponsor.image.alt}/></a>
            </StyledCol>)}
        </Row>
    </Container>);
};

const Sponsors = () => {
    const fetchSponsors = async () => {
        const sponsors = await axios.get("http://localhost:3001/sponsors");
        return sponsors.data;
    };
    const {status, data} = useQuery("sponsors", fetchSponsors);
    return (<Container>
        <h3>Sponsors</h3>
        <p>Are you a technology company? Interested in meeting enthusiasts and geek people for technology?</p>
        <p>This is a <strong>priceless opportunity</strong> to participate in the first big Java and JVM conference in
            Spain, to promote
            your company and to support technological communities.</p>
        <p>Please contact us for more information for sponsoring at <a
            href="mailto:info@barcelonajug.org">info@barcelonajug.org</a></p>
        {status === "success" &&
        <div>
            <SponsorDetails key={1} text="top" variant="danger" sponsors={data.top}/>
            <SponsorDetails key={2} text="premium" variant="warning" sponsors={data.premium}/>
            <SponsorDetails key={3} text="regular" variant="primary" sponsors={data.regular}/>
            <SponsorDetails key={4} text="supporters" variant="info" sponsors={data.supporters}/>
        </div>
        }
    </Container>)
};

export default Sponsors;