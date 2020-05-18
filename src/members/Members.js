import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {Twitter, Linkedin} from "@styled-icons/boxicons-logos";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const StyledCard = styled(Card)`

.card-subtitle{
  font-family: Pacifico, sans-serif;
}
`;
const StyledLink = styled(Card.Link)`
svg {
  height: 16px;
}
`;

const Member = (props) => {
    return (<StyledCard>
        <Card.Header>{props.member.name}</Card.Header>
        <Card.Img variant="top" src={`https://www.jbcnconf.com/2020/${props.member.image.url}`}
                  alt={props.member.image.alt}/>
        <Card.Body>
            <Card.Subtitle>{props.member.position}</Card.Subtitle>
            <Card.Text>{props.member.bio}</Card.Text>
        </Card.Body>
        <Card.Footer>
            {props.member.linkedin && <StyledLink href={props.member.linkedin}><Linkedin/></StyledLink>}
            {props.member.twitter && <StyledLink href={props.member.twitter}><Twitter/></StyledLink>}
        </Card.Footer>
    </StyledCard>);
};


const Members = () => {
    const fetchMembers = async () => {
        const members = await axios.get("http://localhost:3001/members");
        return members.data;
    }

    let {status, data} = useQuery("members", fetchMembers);

    return (
        <Container>
            <Row>
                <Col>
                    <p>The Barcelona Java User Group is a non profit association with a great team and a broad
                        experience
                        in Java technologies. Since 2012, we are organizing talks and meetups focused
                        on <strong>Java</strong> topics, looking forward to spin this technology from our hometown to
                        the
                        rest of the world.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardColumns>
                        {status === "success" && data.map((member, index) => <Member key={index} member={member}/>)}
                    </CardColumns>
                </Col>
            </Row>
        </Container>
    )
        ;
};

export default Members;