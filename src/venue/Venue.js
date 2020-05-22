import React from "react";
import {Container, Grid, Image} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider";
import Embed from "semantic-ui-react/dist/commonjs/modules/Embed";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

const Venue = () => {
    return (<Container>
        <Divider/>
        <h3><Icon name="map"/> CCIB</h3>
        <Grid celled>
            <Grid.Row>
                <Grid.Column>
                    <p>Plaça de Willy Brandt, 11-14</p>
                    <p>08019 Barcelona</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Image src="https://www.jbcnconf.com/2020/assets/img/venue/ccib.jpg" bordered/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Embed iframe={{allowFullScreen: true}} icon="map" url="https://goo.gl/48YzKh"/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <p>Access by metro: station Maresme/Forum - line 4 (yellow),</p>
                    <p>* 1 hour from the airport, Terminals 1 & 2.</p>
                    <p>* 35 minutes from Plaça Catalunya</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="8">
                    <Image src="https://www.jbcnconf.com/2020/assets/img/venue/ccib_perspective.jpg" />
                    <p>CCIB Exhibition Hall</p>
                </Grid.Column>
                <Grid.Column width="8">
                    <Image src="https://www.jbcnconf.com/2020/assets/img/venue/ccib_room.jpg" />
                    <p>CCIB Rooms view</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>);
};

export default Venue;