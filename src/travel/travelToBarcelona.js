import React from "react";
import {Container, Divider, Header, Icon, Image} from "semantic-ui-react";
import Embed from "semantic-ui-react/dist/commonjs/modules/Embed";

const TravelToBarcelona = () => {

    return (<Container text textAlign="justified">
        <Divider/>
        <h2><Icon name="plane"/>Travel to Barcelona</h2>
        <p>
            Few European cities can offer you the wide diversity of cultural experience that you'll find here in
            Barcelona,
            attracting millions of travellers year on year, many of which decide to stay.
            <br/>The mild climate, beautiful coastline, small and winding streets, charming architecture that takes
            you back
            in time, delicious and affordable food make it a perfect place to host such a conference.
            Couple that with the luxury of 4.2 km of beach only a short walk from the city centre, warm sunshine
            most of the
            year, you have have the perfect setting for an enriching and relaxing experience.
        </p>
        <p>
            Barcelona has undergone a transformation in recent years. It’s always been looked upon as a city of
            great
            thinkers, artists and architects, but now it can add “smart city” and “innovative startup hub”
            to its repertoire, rendering it a prime location for technology and attracting increasing numbers of
            international
            talent to its shores.
        </p>


        <h3>Last Year Photos</h3>
        <div className="flickr-widget">

        </div>

        <Image src="https://www.jbcnconf.com/2020/assets/img//barcelona/after-hours.jpg"/>
        <Divider section/>
        <h2>
            Where to go after-hours?
        </h2>

        <Divider horizontal>
            <Header as="h3">
                <Icon name="building outline"/>Plaça de Catalunya & El Barri Gòtic
            </Header>
        </Divider>
        <p>
            The quarter is the centre of the old city of Barcelona, built primarily in the late 19th and early 20th
            century,
            though several buildings date from medieval times.
            The Barri Gòtic retains a labyrinthine street plan, with many small streets opening out into
            squares. <br/>
            It stretches from Plaça de Catalunya to the marina (near the seafront), edged the famous La Rambla
            street.
            <br/>
        </p>
        <Embed iframe={{allowFullScreen: true}} icon="map" url="https://goo.gl/48YzKh"/>

        <Divider horizontal>
            <Header as="h3">
                <Icon name="sun"/>Platja de la Barceloneta
            </Header>
        </Divider>
        <p>
            This beach is inextricably linked to the fishing quarter of the same name, Barceloneta, Barcelona's
            classic
            neighbourhood by the sea, where the people of Barcelona love to come and eat fish and seafood dishes and
            "tapas".
            <br/>
            Within walking distance from the above Barri Gòtic and La Rambla street (across the marina).
        </p>
        <Embed iframe={{allowFullScreen: true}} icon="map" url="https://goo.gl/48YzKh"/>
    </Container>);
};

export default TravelToBarcelona;