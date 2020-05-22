import React from "react";
import {useQuery} from "react-query";
import {Twitter} from "@styled-icons/boxicons-logos"
import fetchSpeakers from "./common";
import {Card, Grid, Image, Loader, Message} from "semantic-ui-react";

const Speaker = ({speaker: {name, description, image, twitter, homepage}}) => {
    return <Card color="blue">
        <Image src={image}/>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        {(twitter || homepage) && <Card.Content extra>
            {twitter && <Card.Description href={twitter}><Twitter/></Card.Description>}
            {homepage && <Card.Description href={homepage}>Homepage</Card.Description>}
        </Card.Content>}
    </Card>;
};

const Speakers = () => {
    const {status, data, error} = useQuery("speakerList", fetchSpeakers);
    if (status === 'loading') {
        return <Loader/>
    }
    if (status === 'error') {
        return <Message negative>Error: {error.message}</Message>
    }

    return <Grid>
        <Grid.Row>
            <Grid.Column width={16}>
                <h4>Speakers</h4>
                <p>
                    Speakers coming from all corners of the world join us to share their experience in various
                    technologies and to invite everyone to participate in Open Source Technologies and in the JCP..
                </p>
            </Grid.Column>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Card.Group itemsPerRow={4}>
                        {status === "success" && data.map((speaker, index) => <Speaker key={index} speaker={speaker}/>)}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid.Row>
    </Grid>;
};

export default Speakers;