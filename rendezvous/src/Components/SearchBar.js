import React from 'react';
import './SearchBar.css';
import FilterCategory from './FilterCategory';
import FilterSelectionPopup from './FilterSelectionPopup';
import Grid from '@material-ui/core/Grid';
import { MenuIcon, SearchIcon } from '@material-ui/icons/Menu';
import {Chip} from '@material-ui/core';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      matches: []
    };
    
    this.handleInput = event => this.handleSearch(event);
    this.searchEvents = event => this.search(event);
  }
  
  handleSearch(event) {
  	this.setState({ searchTerm: event.target.value });
 }
 
 search(event) {
 
 }

  render() {
  	
    return (
    	<Grid container spacing={1}>
      		<Grid item xs={5}><input className="inputBar" onChange={this.handleInput} placeholder="Explore Events"></input></Grid>
      		<Grid item ><button onclick={this.searchEvents} className="searchButton">Search</button></Grid>
      		<Grid item xs={12}><FilterCategory className="filterCategory" /></Grid>
    	</Grid> 
    );
  }
}

export default SearchBar;