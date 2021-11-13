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
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/homepage" element={<HomepageLayout/>}/>
                        <Route path="/articles" element={<Articles/>}/>
                        <Route path="/talks" element={<Talks/>}/>
                        <Route path="/members" element={<Members/>}/>
                        <Route path="/speakers/:id" element={<SpeakerPage/>}/>
                        <Route path="/speakers" element={<Speakers/>}/>
                        <Route path="/sponsors" element={<Sponsors/>}/>
                        <Route path="/tickets" element={<Tickets/>}/>
                        <Route path="/java-barcelona-venue" element={<Venue/>}/>
                        <Route path="/become-sponsor" element={<BecomeSponsor/>}/>
                        <Route path="/coc" element={<CodeOfConduct/>}/>
                        <Route path="/travel-to-java-barcelona" element={<TravelToBarcelona/>}/>
                        <Route path="*">
                            <>
                                URL not found
                            </>
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
