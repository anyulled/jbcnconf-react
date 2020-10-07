import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {Linkedin, Twitter} from "@styled-icons/boxicons-logos";
import {Card, Container, Grid, Icon, Image} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";
import MeetupEvents from "../events/MeetupEvents";

const Member = (props) => {
    return (<Card>
        <Image src={`https://www.jbcnconf.com/2020/${props.member.image.url}`}
               alt={props.member.image.alt}/>
        <Card.Content>
            <Card.Header>{props.member.name}</Card.Header>
            <Card.Meta>{props.member.position}</Card.Meta>
            <Card.Description>{props.member.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            {props.member.linkedin && <Card.Description href={props.member.linkedin}><Linkedin/></Card.Description>}
            {props.member.twitter && <Card.Description href={props.member.twitter}><Twitter/></Card.Description>}
        </Card.Content>
    </Card>);
};

const Members = () => {
    const fetchMembers = async () => {
        const members = await axios.get("http://localhost:3001/members");
        return members.data;
    }

    let {status, data} = useQuery("members", fetchMembers);

    return (<Container>
        <Divider/>
        <h3><Icon name="users"/> Members</h3>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <p>The Barcelona Java User Group is a non profit association with a great team and a broad
                        experience
                        in Java technologies. Since 2012, we are organizing talks and meetups focused
                        on <strong>Java</strong> topics, looking forward to spin this technology from our hometown
                        to
                        the
                        rest of the world.</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <Card.Group itemsPerRow={3}>
                        {status === "success" && data.map((member, index) => <Member key={index} member={member}/>)}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column floated="right" width={4}>
                    <MeetupEvents/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>);
};

export default Members;