import React from "react";
import axios from "axios";
import {useQuery} from "react-query";
import {Card, Grid, Label, List, Loader, Message} from "semantic-ui-react";
import fetchSpeakers from "../speakers/common";

const TalkSpeakers = ({speakers}) =>
    (<span>{speakers.map((speaker, index) => <em
        key={index}>{speaker.name}{index + 1 !== speakers.length && ", "}</em>)}</span>);

const Talk = ({talk: {title, tags, level}, speakers}) =>
    <Card color="blue" fluid>
        <Card.Header>{title}</Card.Header>
        <Card.Content>
            <Card.Header> by <TalkSpeakers speakers={speakers}/></Card.Header>
            <Card.Description>Level: {level}</Card.Description>
        </Card.Content>
        <Card.Meta>
            {tags.map((tag, index) => <span key={index}><Label tag>{tag}</Label> </span>)}
        </Card.Meta>
    </Card>;

const Talks = () => {
    const fetchTalks = async () => {
        const talks = await axios.get("http://localhost:3001/talks");
        return talks.data;
    };
    const {data: speakers} = useQuery("speakers", fetchSpeakers);
    const {status, data: talks, error} = useQuery("talkList", fetchTalks);

    if (status === 'loading') {
        return <Loader size={"medium"}/>
    }
    if (status === 'error') {
        return <Message negative>Error: {error.message}</Message>
    }
    return <Grid>
        <Grid.Row>
            <Grid.Column width="16">
                <List>
                    {status === "success" && talks.map((talk, index) => {
                        const speakersTalk = talk.speakers.map(id => speakers.find(speaker => speaker.ref === id));
                        return <List.Item key={index}>
                            <Talk talk={talk} speakers={speakersTalk}/>
                        </List.Item>;
                    })}
                </List>
            </Grid.Column>
        </Grid.Row>
    </Grid>
};

export default Talks;