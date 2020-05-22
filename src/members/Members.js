import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {Linkedin, Twitter} from "@styled-icons/boxicons-logos";
import {Card, Grid, Image} from "semantic-ui-react";

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

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <p>The Barcelona Java User Group is a non profit association with a great team and a broad
                        experience
                        in Java technologies. Since 2012, we are organizing talks and meetups focused
                        on <strong>Java</strong> topics, looking forward to spin this technology from our hometown to
                        the
                        rest of the world.</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Card.Group>
                        {status === "success" && data.map((member, index) => <Member key={index} member={member}/>)}
                    </Card.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
        ;
};

export default Members;