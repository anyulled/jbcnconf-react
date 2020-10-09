import React, {createRef} from "react";
import {Container, Divider, Grid, Header, Label, Loader, Rail, Ref, Segment, Sticky} from "semantic-ui-react";
import {useParams} from "react-router";
import axios from "axios";
import {useQuery} from "react-query";
import {Speaker} from "./Speakers";

const SpeakerPage = () => {
    const fetchInfo = (_, id) => {
        const fetchSpeaker = axios.get(`http://localhost:3001/speakers/${id}`);
        const fetchTalks = axios.get(`http://localhost:3001/talks?speakers=${id}`);
        return Promise
            .all([fetchSpeaker, fetchTalks])
            .then(values => ({speaker: values[0].data, talks: values[1].data}));
    };
    const ref = createRef();
    const {id: speakerId} = useParams();
    const {data, status} = useQuery(["speaker", speakerId], fetchInfo);

    if (status === 'loading') {
        return <Loader size="medium"/>
    }
    return (<Container text>
        <Grid centered columns={2}>
            <Grid.Column width={10}>
                <Ref innerRef={ref}>
                    <Segment>
                        <Rail position='left'>
                            <Sticky context={ref} offset={50}>
                                <Speaker key={0} speaker={data.speaker}/>
                            </Sticky>
                        </Rail>
                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{margin: '1em 0em', textTransform: 'uppercase'}}
                        >
                            <a id="talks" href='#talks'>Talks</a>
                        </Divider>
                        <Header as="h">{data.talks[0].title}</Header>
                        <p>{data.talks[0].abstract}</p>
                        <p>Level: {data.talks[0].level}</p>
                        <Label.Group color="blue" size="small">
                            {data.talks[0].tags.map((tag, index) => <span key={index}><Label
                                basic>{tag}</Label> </span>)}
                        </Label.Group>
                    </Segment>
                </Ref>
            </Grid.Column>
        </Grid>
    </Container>);
};

export default SpeakerPage;