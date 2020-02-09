import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Card, CardActionArea, CardActions, CardContent, CardMedia,
  Drawer, Tabs, Tab, Toolbar, Button, Typography, IconButton, Grid } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/Menu';
/*https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4*/
/*https://reacttraining.com/react-router/web/guides/quick-start*/
/*https://medium.com/dailyjs/how-to-create-a-navigation-bar-with-react-router-styled-components-and-infrastructure-components-e24bee8d31bb*/
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function BasicCard(){
  return (
    <Grid item xs={6}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}

function App() {


  return (
    <Router>
    <div className="App">
      <AppBar>
        <Toolbar>
          {/*<IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>*/}
          <Typography variant="h6">
            Rendezvous
          </Typography>
          <Route
            path="/"
            render={({location}) => (
              <Fragment>
                <Tabs value={location.pathname}>
                  <Tab label="Item One" value="/" component={Link} to='/'/>
                  <Tab label="Item Two" value="/myevents" component={Link} to='/myevents' />
                  <Tab label="Item Three" value="/settings" component={Link} to='/settings' />
                </Tabs>

              </Fragment>
            )}
          />

          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
      <div>
      <Typography variant="h3">
          Rendezvous
      </Typography>
      <Switch>
        <Route path="/myevents">
          <About />
        </Route>
        <Route path="/settings">
          <Users />
        </Route>
        <Route path="/">
          <Home />
          <Grid container spacing={3}>
            <BasicCard />
            <BasicCard />
            <BasicCard />
          </Grid>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
  {/*<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Welcome to Rendezvous!
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>*/}
  {/*}<Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
  </Router>*/}
}

export default App;
