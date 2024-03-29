import React from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';
import {createMedia} from "@artsy/fresnel";

const AppMedia = createMedia({
    breakpoints: {
        mobile: 320,
        tablet: 768,
        computer: 992,
        largeScreen: 1200,
        widescreen: 1920
    }
});
const mediaStyles = AppMedia.createMediaStyle();
const {Media, MediaContextProvider} = AppMedia;
const HomepageHeading = ({mobile}) => <Container text>
    <Header
        as='h1'
        content='Imagine-a-Company'
        inverted
        style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
        }}
    />
    <Header
        as='h2'
        content='Do whatever you want when you want to.'
        inverted
        style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
        }}
    />
    <Button primary size='huge'>
        Get Started
        <Icon name='right arrow'/>
    </Button>
</Container>

const DesktopContainer = (props) => {
    const [fixed, setFixed] = React.useState({fixed: false});

    const hideFixedMenu = () => setFixed({fixed: false});
    const showFixedMenu = () => setFixed({fixed: true});

    const {children} = props;

    return (
        <MediaContextProvider>
            <Segment as={Media} at="mobile">
                <Visibility
                    once={false}
                    onBottomPassed={showFixedMenu}
                    onBottomPassedReverse={hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 700, padding: '1em 0em'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{marginLeft: '0.5em'}}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading/>
                    </Segment>
                </Visibility>
                {children}
            </Segment>
        </MediaContextProvider>
    )
}

const MobileContainer = (props) => {
    const [sidebarOpened, setSiderbarOpened] = React.useState(false);

    const handleSidebarHide = () => setSiderbarOpened(false);

    const handleToggle = () => setSiderbarOpened(true);

    const {children} = props;

    return (
        <MediaContextProvider>
            <Segment as={Media} at="tablet">
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item as='a'>Log in</Menu.Item>
                    <Menu.Item as='a'>Sign Up</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 350, padding: '1em 0em'}}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={handleToggle}>
                                    <Icon name='sidebar'/>
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted style={{marginLeft: '0.5em'}}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile/>
                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Segment>
        </MediaContextProvider>
        )
}

const ResponsiveContainer = ({children}) => <div>
    <style>{mediaStyles}</style>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
</div>

const HomepageLayout = () => <ResponsiveContainer>
    <Segment style={{padding: '8em 0em'}} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h3' style={{fontSize: '2em'}}>
                        We Help Companies and Companions
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        We can give your company superpowers to do things that they never thought possible.
                        Let us delight your customers and empower your needs... through pure data analytics.
                    </p>
                    <Header as='h3' style={{fontSize: '2em'}}>
                        We Make Bananas That Can Dance
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                        bio-engineered.
                    </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                    <Image bordered rounded size='large'
                           src='https://www.jbcnconf.com/2020/assets/img/homepage/java_barcelona_conference_4.jpg'/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Button size='huge'>Check Them Out</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

    <Segment style={{padding: '0em'}} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                    <Header as='h3' style={{fontSize: '2em'}}>
                        "What a Company"
                    </Header>
                    <p style={{fontSize: '1.33em'}}>That is what they all say about us</p>
                </Grid.Column>
                <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                    <Header as='h3' style={{fontSize: '2em'}}>
                        "I shouldn't have gone with their competitor."
                    </Header>
                    <p style={{fontSize: '1.33em'}}>
                        <Image avatar
                               src='https://www.jbcnconf.com/2020/assets/img/homepage/java_barcelona_conference_10.jpg'/>
                        <b>Nan</b> Chief Fun Officer Acme Toys
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

    <Segment style={{padding: '8em 0em'}} vertical>
        <Container text>
            <Header as='h3' style={{fontSize: '2em'}}>
                Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{fontSize: '1.33em'}}>
                Instead of focusing on content creation and hard work, we have learned how to master the
                art of doing nothing by providing massive amounts of whitespace and generic content that
                can seem massive, monolithic and worth your attention.
            </p>
            <Button as='a' size='large'>
                Read More
            </Button>

            <Divider
                as='h4'
                className='header'
                horizontal
                style={{margin: '3em 0em', textTransform: 'uppercase'}}
            >
                <a id="cases" href='#cases'>Case Studies</a>
            </Divider>

            <Header as='h3' style={{fontSize: '2em'}}>
                Did We Tell You About Our Bananas?
            </Header>
            <p style={{fontSize: '1.33em'}}>
                Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                it's really true. It took years of gene splicing and combinatory DNA research, but our
                bananas can really dance.
            </p>
            <Button as='a' size='large'>
                I'm Still Quite Interested
            </Button>
        </Container>
    </Segment>

    <Segment inverted vertical style={{padding: '5em 0em'}}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='About'/>
                        <List link inverted>
                            <List.Item as='a'>Sitemap</List.Item>
                            <List.Item as='a'>Contact Us</List.Item>
                            <List.Item as='a'>Religious Ceremonies</List.Item>
                            <List.Item as='a'>Gazebo Plans</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services'/>
                        <List link inverted>
                            <List.Item as='a'>Banana Pre-Order</List.Item>
                            <List.Item as='a'>DNA FAQ</List.Item>
                            <List.Item as='a'>How To Access</List.Item>
                            <List.Item as='a'>Favorite X-Men</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>
                            Footer Header
                        </Header>
                        <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
</ResponsiveContainer>

export default HomepageLayout;
