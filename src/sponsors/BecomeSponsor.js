import React from "react";
import {Container, Embed} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import {Image} from "semantic-ui-react";

const BecomeSponsor = () => {
    return (<Container>
            <Divider/>
            <h3><Icon name="spoon"/> DO YOU WANT TO HELP US MAKING JBCNCONF BETTER THAN EVER?</h3>
            <p>JBCNConf is the biggest Java & JVM conference in Spain, and has become the reference for Java developers
                in southern Europe with more than 740 attendees during the last edition.

                For the next edition during September 2020 we expect more than 800 attendees, from 7th to 9th of
                September in the 6th edition.

                And we feel JBCNConf is the right place to go if you are considering
                <ul>
                    <li>increasing IT branding of your organization,</li>
                    <li>getting in touch with the best developers,</li>
                    <li>contacting technology leaders or just</li>
                    <li>improve your employee’s training on the latest technologies.</li>
                </ul>

                If you want to know more here is a brief <a
                    href="https://drive.google.com/open?id=1Q0tId74iQ0_MRc1d2aWBYn4HfiBAsizl">explanatory document</a>,
                or just have a look at the <a
                    href="https://www.flickr.com/photos/barcelonajug/albums/with/72157709509392952">pictures from
                    the last edition.</a>
            </p>
            <Embed icon="google drive" url="https://drive.google.com/file/d/1sHRO7YW6rPWEjdCvhWxCBawclH-JBwfc/preview"/>
            <p align="center" style={{margin: '10px 0'}}>
                <Button href="mailto:info@barcelonajug.org" primary size="large" animated="fade">
                    <Button.Content visible>Get in touch!</Button.Content>
                    <Button.Content hidden>
                        <Icon name='mail'/>
                    </Button.Content>
                </Button>
            </p>
            <Grid>
                <Grid.Row>
                    <Grid.Column><Image src="https://www.jbcnconf.com/2020/assets/img/sponsors/sponsors-mural.jpg"/></Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>

    );
};

export default BecomeSponsor;