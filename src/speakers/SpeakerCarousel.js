import React from "react";
import Carousel from "react-bootstrap/Carousel";
import fetchSpeakers from "./common";
import {useQuery} from "react-query";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SpeakersCarousel = () => {
    const {status, data} = useQuery("speakers", fetchSpeakers);
    return (<Container>
            <Row>
                <Col>
                    <Carousel>
                        {status === "success" && data.map((speaker, index) => <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src=""
                                alt=""/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>)}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default SpeakersCarousel;
