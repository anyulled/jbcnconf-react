import React from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {ChevronsRight} from "@styled-icons/boxicons-solid/ChevronsRight";
import {Button, Container, Item, Segment} from "semantic-ui-react";

//background-image: ${props => `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.jbcnconf.com/2020/${props.image}')`};

const Article = (props) => {
    return (<Item>
        <Item.Image src={`https://www.jbcnconf.com/2020/${props.article.image}`}/>
        <Item.Content>
            <Item.Header>{props.article.title}</Item.Header>
            <Item.Meta>
                <p>{props.article.excerpt}</p>
            </Item.Meta>
            <Item.Extra>
                <Button floated={"right"} primary href={`/articles?id=${props.article.id}`}>Read more <ChevronsRight/>
                </Button>
            </Item.Extra>
        </Item.Content>
    </Item>);
}

const Articles = () => {
    const fetchArticles = async () => {
        const articles = await axios.get("http://localhost:3001/articles");
        return articles.data;
    };
    const {status, data} = useQuery("Articles", fetchArticles);
    return (
        <Container>
            <Segment>
                <Item.Group divided>
                    {status === "success" && data.map((article, index) => <Article key={index} article={article}/>)}
                </Item.Group>
            </Segment>
        </Container>);
};

export default Articles;