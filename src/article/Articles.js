import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {useQuery} from "react-query";
import axios from "axios";
import {ChevronsRight} from "@styled-icons/boxicons-solid/ChevronsRight";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const StyledArticle = styled.article`
color: white;
background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.jbcnconf.com/2020/${props.image}')`};

`;

const Article = (props) => {
    return (
        <StyledArticle image={props.article.image}>
            <h1>{props.article.title}</h1>
            <p>{props.article.excerpt}</p>
            <Button href={`/articles?id=${props.article.id}`}>Read more <ChevronsRight/></Button>
        </StyledArticle>
    );
}

const Articles = () => {
    const fetchArticles = async () => {
        const articles = await axios.get("http://localhost:3001/articles");
        return articles.data;
    };
    const {status, data} = useQuery("Articles", fetchArticles);
    return (
        <Container>
            <Row>
                {status === "success" && data.map((article, index) => <Col key={index}>
                    <Article article={article}/>
                </Col>)}
            </Row>
        </Container>);
};

export default Articles;