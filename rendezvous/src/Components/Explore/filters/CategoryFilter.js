import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';

class CatPopup extends React.Component {
	constructor(props) {
		super(props);
		var curFils = this.props.curFils;
		this.state = {
			filters: curFils,
		};
		this.onChange = event => this.onChange2(event);
	}
	
	onChange2 (event) {
		let newArr = this.state.filters;
		newArr[event.target.value] = ! this.state.filters[event.target.value];
		this.setState({filters: newArr}, this.props.changeCat(this.state.filters));
	}
	
	
	render () {
	
	let cats = ["exercise", "music", "entertainment", "sports", "food", "drinks", "leisure", "culture"];
	let toggle = this.onChange;
	
	let listitems = cats.map(function(cat, index) {
  		let checked = this.state.filters[index];
  		return (
  			<ListItem key={cat}> <ListItemIcon><Checkbox checked={checked} onChange={toggle} value={index}/> </ ListItemIcon> <ListItemText> {cat} </ListItemText></ListItem>
  		);
  	}.bind(this));
	
		return (
			<List id="filterCats"> {listitems} </List>
		);
	
	};

}

export default CatPopup;
