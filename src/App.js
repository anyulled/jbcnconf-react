import React from 'react';
import TopMenu from "./common/topMenu";
import Footer from "./common/footer";
import {Route, Routes} from "react-router";
import {Home} from "./home/Home";
import Talks from "./talks/talks";
import {Helmet} from "react-helmet";
import Members from "./members/Members";
import GlobalStyle from "./common/GlobalStyle";
import Speakers from "./speakers/Speakers";
import Sponsors from "./sponsors/Sponsors";
import Articles from "./article/Articles";
import HomepageLayout from "./common/HomepageLayout";
import Tickets from "./tickets/Tickets";
import Venue from "./venue/Venue";
import BecomeSponsor from "./sponsors/BecomeSponsor";
import CodeOfConduct from "./codeOfConduct/CodeOfConduct";
import TravelToBarcelona from "./travel/travelToBarcelona";
import SpeakerPage from "./speakers/SpeakerPage";
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    const queryClient = new QueryClient();
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
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
                    <Routes>
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
                        <Route path="/speakers/:id">
                            <SpeakerPage/>
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
                        <Route path="/coc">
                            <CodeOfConduct/>
                        </Route>
                        <Route path="/travel-to-java-barcelona">
                            <TravelToBarcelona/>
                        </Route>
                        <Route path="*">
                            <h1 className="text-center text-danger">URL not found</h1>
                        </Route>
                    </Routes>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </QueryClientProvider>
        </BrowserRouter>
    )
};

export default App;
