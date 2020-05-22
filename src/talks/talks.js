import React from "react";
import axios from "axios";
import {useQuery} from "react-query";
import {Card, Container, Grid, Image, Label, Loader, Message} from "semantic-ui-react";
import fetchSpeakers from "../speakers/common";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";

const TalkSpeakers = ({speakers}) => (<span>{speakers.map((speaker, index) => <em
    key={index}>{speaker.name}{index + 1 !== speakers.length && ", "}</em>)}</span>);

const Talk = ({talk: {title, abstract, tags, level}, speakers}) =>
    <Card color="blue" fluid>
        <Card.Content>
            <Image avatar src={speakers[0].image} floated="right"/>
            <Card.Header>{title}</Card.Header>
            <Card.Meta> by <TalkSpeakers speakers={speakers}/></Card.Meta>
            <Card.Description>
                <p>{abstract.substr(0, 240).concat("...")}</p>
                <p>Level: {level}</p>
            </Card.Description>
        </Card.Content>
        <Card.Meta>
            <Label.Group color="blue" size="small">
                {tags.map((tag, index) => <span key={index}><Label basic>{tag}</Label> </span>)}
            </Label.Group>
        </Card.Meta>
    </Card>;

const Talks = () => {
    const fetchTalks = async () => {
        const talks = await axios.get("http://localhost:3001/talks");
        return talks.data;
    };
    const {status: speakerStatus, data: speakers, error: speakerError} = useQuery("speakers", fetchSpeakers);
    const {status: talkStatus, data: talks, error: talkError} = useQuery("talkList", fetchTalks);

    const ready = () => speakerStatus === "success" & talkStatus === "success";
    const isLoading = () => speakerStatus === "loading" || talkStatus === "loading";
    const isError = () => speakerStatus === "error" || talkStatus === "error";

    if (isLoading() === 'loading') {
        return <Loader size={"medium"}/>
    }
    if (isError() === 'error') {
        return <Message negative>Error: {talkError.message} {speakerError.message}</Message>
    }
    return <Container>
        <Divider/>
        <h3>Talks</h3>
        <Grid>
            <Grid.Row>
                <Grid.Column width="16">
                    <Card.Group itemsPerRow={2}>
                        {ready() && talks.map((talk, index) => {
                            const speakersTalk = talk.speakers.map(id => speakers.find(speaker => speaker.ref === id));
                            return <Talk talk={talk} speakers={speakersTalk} key={index}/>;
                        })}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
};

export default Talks;