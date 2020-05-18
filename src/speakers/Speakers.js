import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {useQuery} from "react-query";
import Alert from "react-bootstrap/Alert";
import {Twitter} from "@styled-icons/boxicons-logos"
import CardColumns from "react-bootstrap/CardColumns";
import fetchSpeakers from "./common";

const Speaker = ({speaker: {name, description, image, twitter, homepage}}) => {
    return <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        {(twitter || homepage) && <Card.Footer>
            {twitter && <Card.Link href={twitter}><Twitter/></Card.Link>}
            {homepage && <Card.Link href={homepage}>Homepage</Card.Link>}
        </Card.Footer>}
    </Card>;
};

const Speakers = () => {

    const {status, data, error} = useQuery("speakerList", fetchSpeakers);
    if (status === 'loading') {
        return <Alert variant="info">Loading...</Alert>
    }
    if (status === 'error') {
        return <Alert variant="danger">Error: {error.message}</Alert>
    }
    return <Container>
        <Row>
            <Col>
                <h4>Speakers</h4>
                <p>
                    Speakers coming from all corners of the world join us to share their experience in various
                    technologies and to invite everyone to participate in Open Source Technologies and in the JCP..
                </p>
            </Col>
        </Row>
        <Row>
            <CardColumns>
                {status === "success" && data.map((speaker, index) => <Speaker key={index} speaker={speaker}/>)}
            </CardColumns>
        </Row>
    </Container>
};

export default Speakers;