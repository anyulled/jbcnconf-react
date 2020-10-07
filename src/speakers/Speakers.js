import React from "react";
import {useQuery} from "react-query";
import {Linkedin, Twitter} from "@styled-icons/boxicons-logos";
import {Home} from "@styled-icons/heroicons-solid/Home";
import fetchSpeakers from "./common";
import {Card, Grid, Image, Loader, Message} from "semantic-ui-react";
import Container from "semantic-ui-react/dist/commonjs/elements/Container";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";

export const Speaker = ({speaker: {name, description, image, twitter, homepage, linkedin}}) => {
    return <Card color="blue">
        <Image src={image}/>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
        {(twitter || homepage || linkedin) && <Card.Content extra>
            {twitter && <Card.Description href={twitter}><Twitter/></Card.Description>}
            {homepage && <Card.Description href={homepage}><Home/></Card.Description>}
            {linkedin && <Card.Description href={linkedin}><Linkedin/></Card.Description>}
        </Card.Content>}
    </Card>;
};

const Speakers = () => {
    const {status, data, error} = useQuery("speakerList", fetchSpeakers);

    if (status === 'loading') {
        return <Loader size="medium"/>
    }
    if (status === 'error') {
        return <Message negative>Error: {error.message}</Message>
    }

    return <Container>
        <Divider/>
        <h3>Speakers</h3>
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <p>
                        Speakers coming from all corners of the world join us to share their experience in various
                        technologies and to invite everyone to participate in Open Source Technologies and in the JCP..
                    </p>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Card.Group itemsPerRow={5}>
                            {status === "success" && data.map((speaker, index) => <Speaker key={index}
                                                                                           speaker={speaker}/>)}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid.Row>
        </Grid>
    </Container>;
};

export default Speakers;