import React from "react";
import axios from "axios";
import {useQuery} from "react-query";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Spinner from "react-bootstrap/Spinner";
import fetchSpeakers from "../speakers/common";

const TalkSpeakers = ({speakers}) =>
    (<span>{speakers.map((speaker, index) => <em
        key={index}>{speaker.name}{index + 1 !== speakers.length && ", "}</em>)}</span>);

const Talk = ({talk: {title, tags, level}, speakers}) =>
    <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Title> by <TalkSpeakers speakers={speakers}/></Card.Title>
            <Card.Subtitle>Level: {level}</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
            {tags.map((tag, index) => <span key={index}><Badge variant="secondary">{tag}</Badge> </span>)}
        </Card.Footer>
    </Card>;

const Talks = () => {
    const fetchTalks = async () => {
        const talks = await axios.get("http://localhost:3001/talks");
        return talks.data;
    };
    const {data: speakers} = useQuery("speakers", fetchSpeakers);
    const {status, data: talks, error} = useQuery("talkList", fetchTalks);

    if (status === 'loading') {
        return <Container><Row><Col sm={{span: 1, offset: 6}}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Col></Row></Container>
    }
    if (status === 'error') {
        return <Alert variant="danger">Error: {error.message}</Alert>
    }
    return <Container>
        <Row>
            <Col>
                <ListGroup>
                    {status === "success" && talks.map((talk, index) => {
                        const speakersTalk = talk.speakers.map(id => speakers.find(speaker => speaker.ref === id));
                        return <ListGroupItem key={index}>
                            <Talk talk={talk} speakers={speakersTalk}/>
                        </ListGroupItem>;
                    })}
                </ListGroup>
            </Col>
        </Row>
    </Container>
};

export default Talks;