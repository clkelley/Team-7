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
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';


import SearchBar from './Components/SearchBar'
import ExplorePage from './Components/ExplorePage'
import EventCard from './Components/EventCard'
import Faraz from './Components/Faraz'
import NavigationFramework from './Components/NavigationFramework'

/*https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4*/
/*https://reacttraining.com/react-router/web/guides/quick-start*/
/*https://medium.com/dailyjs/how-to-create-a-navigation-bar-with-react-router-styled-components-and-infrastructure-components-e24bee8d31bb*/
function Home() {
  return <h1>Home</h1>;
}

function Explore() {
  return <div>
  			<ExplorePage/>
  		</div>;
}

function MyEvents() {
	return <h1>My Events</h1>;
}

function Users() {
  return <div>
          <Faraz/>
         </div>;
}

function App() {
  return (
    <NavigationFramework />
  );
}

export default App;
