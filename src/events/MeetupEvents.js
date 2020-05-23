import React from "react";
import {Divider, Grid, Header, Icon, List} from "semantic-ui-react";

const Event = (props) => {
    const eventDate = new Date(props.event.time);
    return (
        <List.Item href={props.event.link}>
            <List.Icon name='calendar check' size='large' verticalAlign='middle' color="teal"/>
            <List.Content>
                <List.Header>{props.event.name}</List.Header>
                <List.Description>{eventDate.toLocaleDateString()}</List.Description>
                {!props.event.is_online_event && <><List.Icon color="red"
                                                              name="marker"/>{props.event.venue.name}, {props.event.venue.city}</>}
            </List.Content>
        </List.Item>
    );
};

const MeetupEvents = () => {
    const events = [{
        "created": 1585929632000,
        "duration": 5400000,
        "id": "269835940",
        "name": "What I Wish I Knew About Maven Years Ago",
        "date_in_series_pattern": false,
        "status": "past",
        "time": 1586448000000,
        "local_date": "2020-04-09",
        "local_time": "18:00",
        "updated": 1586456885000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 76,
        "venue": {
            "id": 26906060,
            "name": "Evento en línea",
            "repinned": false,
            "country": "",
            "localized_country_name": ""
        },
        "is_online_event": true,
        "group": {
            "created": 1373641277000,
            "name": "BarcelonaJUG",
            "id": 9325832,
            "join_mode": "open",
            "lat": 41.400001525878906,
            "lon": 2.1700000762939453,
            "urlname": "BarcelonaJUG",
            "who": "JUGgers",
            "localized_location": "Barcelona, España",
            "state": "",
            "country": "es",
            "region": "es_ES",
            "timezone": "Europe/Madrid"
        },
        "link": "https://www.meetup.com/es-ES/BarcelonaJUG/events/269835940/",
        "description": "<p>Hi!</p> <p>First of all, we hope all of you are staying safe at home.</p> <p>During those difficult days, we thought that it could be interesting to continue our activities { to grow and learn } as a developers, but this time only in \"online\" mode. Don't you think so? Please join us in our next event with Andrés Almiray where we will { for sure } learn a lot of things from a tool that many of us knew (a bit): maven</p> <p>Apache Maven is seen by many developers as the defacto build tool in the Java space. Since its early days back in April 2002, Maven has helped developers build projects and assemble artifacts. On the surface not much appears to have changed in the design, structure, and build file syntax, but in reality there are quite a good number of features that have been added through the years that make Maven a powerhouse.</p> <p>Our speaker, Andres is a Java/Groovy developer and a Java Champion with more than 20 years of experience in software design and development. He has been involved in web and desktop application development since the early days of Java. Andres is a true believer in open source and has participated on popular projects like Groovy, Griffon, and DbUnit, as well as starting his own projects (Json-lib, EZMorph, GraphicsBuilder, JideBuilder). Founding member of the Griffon framework and Hackergarten community event.</p> <p>Find him on LinkedIn: <a href=\"https://ch.linkedin.com/in/aalmiray\" class=\"linkified\">https://ch.linkedin.com/in/aalmiray</a></p> <p>Lastly, remember to RSVPed, we will add here or in Twitter how to join us online.</p> <p>See you online and stay safe!</p> ",
        "visibility": "public",
        "member_pay_fee": false
    }, {
        "created": 1579261828000,
        "duration": 7200000,
        "fee": {
            "accepts": "paypal",
            "amount": 2.0,
            "currency": "EUR",
            "description": "",
            "label": "Precio",
            "required": true
        },
        "id": "267988177",
        "name": "JVM Tuning: What you should know before going into production",
        "rsvp_limit": 50,
        "date_in_series_pattern": false,
        "status": "past",
        "time": 1582824600000,
        "local_date": "2020-02-27",
        "local_time": "18:30",
        "rsvp_close_offset": "PT23H30M",
        "updated": 1582836361000,
        "utc_offset": 3600000,
        "waitlist_count": 0,
        "yes_rsvp_count": 43,
        "venue": {
            "id": 26283607,
            "name": "Dynatrace",
            "lat": 41.403404235839844,
            "lon": 2.1895930767059326,
            "repinned": true,
            "address_1": "Avinguda Diagonal, 211",
            "city": "Barcelona",
            "country": "es",
            "localized_country_name": "España"
        },
        "is_online_event": false,
        "group": {
            "created": 1373641277000,
            "name": "BarcelonaJUG",
            "id": 9325832,
            "join_mode": "open",
            "lat": 41.400001525878906,
            "lon": 2.1700000762939453,
            "urlname": "BarcelonaJUG",
            "who": "JUGgers",
            "localized_location": "Barcelona, España",
            "state": "",
            "country": "es",
            "region": "es_ES",
            "timezone": "Europe/Madrid"
        },
        "link": "https://www.meetup.com/es-ES/BarcelonaJUG/events/267988177/",
        "description": "<p>Hi!</p> <p>Have you been working and setting up your JVM properly... or you just deploy your code that runs your Java code without tweaking your Java Virtual Machine? In any case, we believe this talk is for you ;-)</p> <p>You finally have your application finished, with all unit and integration tests green. Is that enough? You'd rather like to be sure that the performance and memory footprint is the best one for the production environment and loads.</p> <p>In this talk by Eduardo Sánchez ( <a href=\"https://twitter.com/edusanchezcon\" class=\"linkified\">https://twitter.com/edusanchezcon</a> ) we\u2019ll see most common load test types. Eduardo will explain how memory is managed by the JVM and how the Garbage Collector and JIT Compiler work. He will also show how to find and solve most common memory leaks and bottlenecks using tools such as Eclipse Memory Analyzer and Java Flight Recorder, with some practical examples.</p> <p>Eduardo Sánchez is a Java developer, currently working as a Software Engineer at Autentia, where he helps develop every kind of applications. He considers himself a Clean Code lover but also enjoys learning about low level programming and JVM internals.</p> <p>We have also to thank Dynatrace { 16th Floor in the Glories Tower } that will host the event and invite us to drink and eat some snacks to network during/after the event ;-)</p> <p>See you there and be careful with the GC pauses!</p> <p>***Warning*** For security reasons we will need your full name &amp;&amp; Identity number/DNI/NIE for entering the building</p> ",
        "how_to_find_us": "Glories Tower (16th floor) - Metro L1 Glories / Tram Glories",
        "visibility": "public",
        "member_pay_fee": false
    }, {
        "created": 1578419374000,
        "duration": 7200000,
        "fee": {
            "accepts": "paypal",
            "amount": 2.0,
            "currency": "EUR",
            "description": "",
            "label": "Precio",
            "required": true
        },
        "id": "267722945",
        "name": "Migrating an Spring app to Quarkus, my experience",
        "rsvp_limit": 40,
        "date_in_series_pattern": false,
        "status": "past",
        "time": 1580320800000,
        "local_date": "2020-01-29",
        "local_time": "19:00",
        "updated": 1580392833000,
        "utc_offset": 3600000,
        "waitlist_count": 0,
        "yes_rsvp_count": 38,
        "venue": {
            "id": 26419108,
            "name": "Opentrends",
            "lat": 41.41223907470703,
            "lon": 2.2100250720977783,
            "repinned": true,
            "address_1": "Carrer de Veneçuela, 105",
            "city": "Barcelona",
            "country": "es",
            "localized_country_name": "España"
        },
        "is_online_event": false,
        "group": {
            "created": 1373641277000,
            "name": "BarcelonaJUG",
            "id": 9325832,
            "join_mode": "open",
            "lat": 41.400001525878906,
            "lon": 2.1700000762939453,
            "urlname": "BarcelonaJUG",
            "who": "JUGgers",
            "localized_location": "Barcelona, España",
            "state": "",
            "country": "es",
            "region": "es_ES",
            "timezone": "Europe/Madrid"
        },
        "link": "https://www.meetup.com/es-ES/BarcelonaJUG/events/267722945/",
        "description": "<p>Have you heard about Quarkus (www.quarkus.io)? For sure you have, a new super fast, super light framework to develop cloud native and GraalVM compatible apps.</p> <p>How hard is to go the Quarkus way? Specially coming from an existing Spring app.</p> <p>In this session we will show an experience migrating an existing Spring app to Quarkus using the Spring PetClinic REST app including different technologies as Hibernate, Spring-MVC, etc.</p> <p>SPEAKER: This talk will be conducted by Jonathan Vila ( <a href=\"https://github.com/jonathanvila\" class=\"linkified\">https://github.com/jonathanvila</a> ), software engineer at Red Hat and Leader at BarcelonaJUG. He has more than 25 years working as developer and several languages and is starting a Quarkus-isation of his new developments.</p> <p>&gt;&gt; Importante: el idioma de la presentacion (inglés/español) será seleccionado por la audiencia al inicio de la sesión.</p> ",
        "visibility": "public",
        "member_pay_fee": false
    }, {
        "created": 1577009824000,
        "duration": 5400000,
        "fee": {
            "accepts": "paypal",
            "amount": 2.0,
            "currency": "EUR",
            "description": "",
            "label": "Precio",
            "required": true
        },
        "id": "267354529",
        "name": "Designing event-driven architectures using the AsyncAPI specification",
        "rsvp_limit": 40,
        "date_in_series_pattern": false,
        "status": "past",
        "time": 1579802400000,
        "local_date": "2020-01-23",
        "local_time": "19:00",
        "rsvp_close_offset": "PT24H",
        "updated": 1579813412000,
        "utc_offset": 3600000,
        "waitlist_count": 0,
        "yes_rsvp_count": 34,
        "venue": {
            "id": 26489201,
            "name": "Carrer de Provença, 339",
            "lat": 41.39979934692383,
            "lon": 2.1680259704589844,
            "repinned": true,
            "address_1": "Carrer de Provença, 339",
            "city": "Barcelona",
            "country": "es",
            "localized_country_name": "España"
        },
        "is_online_event": false,
        "group": {
            "created": 1373641277000,
            "name": "BarcelonaJUG",
            "id": 9325832,
            "join_mode": "open",
            "lat": 41.400001525878906,
            "lon": 2.1700000762939453,
            "urlname": "BarcelonaJUG",
            "who": "JUGgers",
            "localized_location": "Barcelona, España",
            "state": "",
            "country": "es",
            "region": "es_ES",
            "timezone": "Europe/Madrid"
        },
        "link": "https://www.meetup.com/es-ES/BarcelonaJUG/events/267354529/",
        "description": "<p>Dear all,</p> <p>How are you? Ready for Christmas Holidays? We are! ;-)</p> <p>How can we end this 2019 better? Well... by starting to prepare the next one! ;-) That's why we, the BarcelonaJUG community and InnoIT Consulting, are delighted to invite you to our next Meetup of \"Designing event-driven architectures using the AsyncAPI specification\" driven by Fran Mendez ( <a href=\"https://twitter.com/fmvilas\" class=\"linkified\">https://twitter.com/fmvilas</a> ).</p> <p>In the world of REST APIs, we're used to having a great variety of tools and specifications (Swagger, OpenAPI, RAML). This has enabled us to automate the generation of documentation portals, code, and also led to a bunch of excellent API management services like Apigee, Mulesoft, Kong, and many more.</p> <p>On the contrary, the world of event-driven architectures hasn't received much love until recently. With the growth of technologies like Kafka or RabbitMQ and architectures like microservices, organizations are starting to adopt event-driven architectures more and more.</p> <p>In this session, we'll go through the key points we learned about APIs and apply them to the event-driven or asynchronous APIs (yes, they're APIs too.) AsyncAPI instead of OpenAPI/Swagger, AMQP/MQTT/Kafka instead of HTTP, and publish/subscribe instead of request/response.</p> <p>At the end of the talk, you would have learned how to document, code, and test your event-driven architecture.</p> <p>Fran is the founder of the AsyncAPI Initiative ( <a href=\"https://asyncapi.com\" class=\"linkified\">https://asyncapi.com</a> ). He\u2019s a software engineer with a strong focus on event-driven APIs and microservices. In his spare time, he enjoys playing volleyball, kayaking, and stand-up paddle surf.</p> <p>See you there have great holidays and Happy New Year!</p> ",
        "how_to_find_us": "Aticco Co-Working: Carrer de Provença, 339, 08037 Barcelona ( Metro Verdaguer )",
        "visibility": "public",
        "member_pay_fee": false
    }, {
        "created": 1572603101000,
        "duration": 5400000,
        "fee": {
            "accepts": "paypal",
            "amount": 2.0,
            "currency": "EUR",
            "description": "",
            "label": "Precio",
            "required": true
        },
        "id": "266131575",
        "name": "Java Lambda expressions  and Streams API: a performance analysis",
        "date_in_series_pattern": false,
        "status": "past",
        "time": 1574272800000,
        "local_date": "2019-11-20",
        "local_time": "19:00",
        "updated": 1574285349000,
        "utc_offset": 3600000,
        "waitlist_count": 0,
        "yes_rsvp_count": 34,
        "venue": {
            "id": 26129469,
            "name": "Ocado Technology",
            "lat": 41.38274383544922,
            "lon": 2.1427700519561768,
            "repinned": true,
            "address_1": "Av. de Josep Tarradellas, 20",
            "city": "Barcelona",
            "country": "es",
            "localized_country_name": "España"
        },
        "is_online_event": false,
        "group": {
            "created": 1373641277000,
            "name": "BarcelonaJUG",
            "id": 9325832,
            "join_mode": "open",
            "lat": 41.400001525878906,
            "lon": 2.1700000762939453,
            "urlname": "BarcelonaJUG",
            "who": "JUGgers",
            "localized_location": "Barcelona, España",
            "state": "",
            "country": "es",
            "region": "es_ES",
            "timezone": "Europe/Madrid"
        },
        "link": "https://www.meetup.com/es-ES/BarcelonaJUG/events/266131575/",
        "description": "<p>Hi devs !!! We're on the road again, with a very interesting session about Lambdas and Stream API on Java.</p> <p>Overview<br/>Java 8 core features: Lambda expressions and Streams API have been widely adopted and popular since their launch. They promote benefits like: conciseness, readability, code reuse and less error prone. Even though they are embraced by the community, many developers are not<br/>familiar with under the hood aspects of these syntactic sugar, neither performance considerations involved.</p> <p>Goals<br/>\u2022 Briefly explain under the hood compile and implementation of lambdas and streams.<br/>\u2022 Present performance analysis of lambdas and streams when compared to conventional syntax for same functionality.<br/>\u2022 Present lambdas and streams variations and tools that can improve performance.</p> <p>The talk will be presented by Joana Socrates, she is a Software Engineer at Ocado Technology, working to achieve technology evolution and the pursuit of new challenges. She is a PhD in computer architecture and in computer engineering. Currently based in Barcelona, she has been through pain and glory developing in Java since 2011 and never stopped loving it.</p> ",
        "visibility": "public",
        "member_pay_fee": false
    }];

    return (<Grid>
        <Divider horizontal>
            <Header as="h4" color="blue"><Icon name="calendar" color="blue"/>Latest Jug events</Header>
        </Divider>
        <Grid.Row>
            <Grid.Column stretched>
                <List animated divided relaxed>
                    {events.map((event, index) => <Event key={index} event={event}/>)}
                </List>
            </Grid.Column>
        </Grid.Row>
    </Grid>);
};

export default MeetupEvents;