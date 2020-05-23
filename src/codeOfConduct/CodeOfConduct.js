import React from "react";
import {Container, Divider, Icon} from "semantic-ui-react";

const CodeOfConduct = () => {
    return (<Container text>
        <Divider/>
        <h2><Icon name="code"/>CODE OF CONDUCT</h2>
        <p>The JBCNConf is the yearly event organised by the non-profit Java User Group Barcelona between 7th to 9th of
            September 2020.</p>
        <p>Conference Talks will held from Monday 7th to Tuesday 8th and Workshops will run on Wednesday 9th.</p>

        <p>Topics are related to the Java World and related technologies: #Java #JVM langs
            (Scala/Cloujure/Groovy/Kotlin...) #Functional Programming #Microservices #Docker #Kubernetes #Mesos
            #Marathon
            #JavaFX #DevOps #Testing #DDD #TDD #CI #CD #noSQL #SOA #Cloud #Mobile #Integration #Architecture
            #Scalability
            #IoT #Actors #Concurrency.</p>
        <h4>Code of conduct:</h4>
        <p>Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of
            gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size,
            race, ethnicity, religion (or lack thereof), or technology choices.</p>
        <p>We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not
            appropriate for any conference venue, including talks, workshops, parties, Twitter and other online
            media.</p>
        <p>Conference participants violating these rules may be sanctioned or expelled from the conference without a
            refund
            at the discretion of the conference organisers.</p>
    </Container>);
};

export default CodeOfConduct;