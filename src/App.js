import React from 'react';
import TopMenu from "./common/topMenu";
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
import HomepageLayout from "./common/Homepage";
import Tickets from "./tickets/Tickets";
import Venue from "./venue/Venue";
import BecomeSponsor from "./sponsors/BecomeSponsor";

const App = () => {
    const history = createBrowserHistory();
    return (<Router history={history}>
        <div className="App">
            <Helmet>
                <title>JBCNConf - The greatest JVM Conference in Spain</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&family=Pacifico&family=Merienda+One&family=Roboto&family=Titillium+Web&display=swap"
                    rel="stylesheet"/>
            </Helmet>
            <GlobalStyle/>
            <header>
                <TopMenu/>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/homepage">
                    <HomepageLayout/>
                </Route>
                <Route path="/articles">
                    <Articles/>
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
                <Route path="/tickets">
                    <Tickets/>
                </Route>
                <Route path="/java-barcelona-venue">
                    <Venue/>
                </Route>
                <Route path="/become-sponsor">
                    <BecomeSponsor/>
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
