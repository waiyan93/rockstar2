import React from 'react';
import MyAppBar from './MyAppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { ListItem, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GroupIcon from '@material-ui/icons/Group';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


class Navigation extends React.Component {
    state = {
        drawer: false,
    };

    toggleDrawer = (open) => () => {
        this.setState({
            drawer: open,
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <MyAppBar toggleDrawer={this.toggleDrawer} />
                    <SwipeableDrawer
                        open={this.state.drawer}
                        onClose={this.toggleDrawer(false)}
                        onOpen={this.toggleDrawer(true)}
                    >
                        <header style={{ width: 250, height: 100, background: 'gray' }}></header>
                        <List>
                            <ListItem onClick={this.toggleDrawer(false)}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <Link to="/" >
                                    <ListItemText primary="Home"></ListItemText>
                                </Link>
                            </ListItem>
                            <Divider />
                            <ListItem onClick={this.toggleDrawer(false)} >
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <Link to="/about" >
                                    <ListItemText primary="About"></ListItemText>
                                </Link>
                            </ListItem>
                            <Divider />
                            <ListItem onClick={this.toggleDrawer(false)} >
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <Link to="/contact-us" >
                                    <ListItemText primary="Contact Us"></ListItemText>
                                </Link>
                            </ListItem>
                            <Divider />
                        </List>
                    </SwipeableDrawer>
                    <BottomNavigation style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                        <Link to="/more/recents">
                            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        </Link>
                        <Link to="/more/favorites">
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        </Link>
                        <Link to="/more/locations">
                            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                        </Link>
                    </BottomNavigation>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/more/:label" component={More} />
                </div>
            </Router>
        )
    }
}

const Home = props => <h1>Home</h1>;
const About = props => <h1>About</h1>;
const ContactUs = props => <h1>Contact Us</h1>;
const More = props => <h1>More - {props.match.params.label}</h1>
export default Navigation;