import React from 'react';
import './SearchBar.css';
import FilterCategory from './filters/FilterCategory';
import { Grid, Button } from '@material-ui/core';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';
import {Chip} from '@material-ui/core';
import Firebase from 'firebase'
import { db } from '../../firebase';
import logo from '../../media/icon_transparent.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleInput = event => this.handleInput2(event);

  }

  handleInput2(event) {
  	this.setState({ searchTerm: event.target.value });
  	this.props.callback2(event.target.value);
  }

  render() {
    return (
          <Grid container item xs={12} spacing={2} className="searchGrid" direction="row">
    		<Grid item xs={1}><img className="logo" src={logo}></img></Grid>
      		<Grid item xs={8}><input className="inputBar" onChange={this.handleInput} placeholder="Explore Events" ></input></Grid>
      		<Grid item xs={3}><Button onClick={this.props.callback} color="primary" variant="contained" className="searchButton">Search</Button></Grid>
          </Grid>

    );
  }
}

export default SearchBar;
