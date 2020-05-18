import React from 'react';
import Header from "./common/header";
import Footer from "./common/footer";
import {Route, Router, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {Home} from "./home/Home";
import Talks from "./talks/talks";
import {Helmet} from "react-helmet";
import Members from "./members/Members";
import GlobalStyle from "./common/GlobalStyle";
import Speakers from "./speakers/Speakers";
import Sponsors from "./sponsors/Sponsors";
import Articles from "./article/Articles";

const App = () => {
    const history = createBrowserHistory();
    return (<Router history={history}>
        <div className="App">
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&family=Roboto&family=Titillium+Web&display=swap"
                    rel="stylesheet"/>
            </Helmet>
            <header>
                <Header/>
            </header>
            <GlobalStyle/>
            <Switch>
                <Route path="/articles">
                    <Articles/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/talks">
                    <Talks/>
                </Route>
                <Route path="/members">
                    <Members/>
                </Route>
                <Route path="/speakers">
                    <Speakers/>
                </Route>
                <Route path="/sponsors">
                    <Sponsors/>
                </Route>
                <Route path="*">
                    <h1 className="text-center text-danger">URL not found</h1>
                </Route>
            </Switch>
            <footer>
                <Footer/>
            </footer>
        </div>
    </Router>)
};

export default App;
