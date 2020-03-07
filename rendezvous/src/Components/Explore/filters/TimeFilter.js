import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';


class TimePopup extends React.Component {

	constructor(props) {
		super(props);
		var curFils = this.props.curFils;
		this.state = {
			fils: curFils,
		};
		
		this.onChange = event => this.onChange2(event);
		
	}
	
	onChange2 (event) {
		let newArr = this.state.fils;
		newArr[event.target.value] = !this.state.fils[event.target.value];
		this.setState({fils: newArr}, this.props.changeTime(this.state.fils));
	}
	
	render () {
	let times = ["morning", "afternoon", "evening",];
	let toggle = this.onChange;

	let listitems = times.map(function(time,index) {
		let checked = this.state.fils[index];
  		return (
  			<ListItem> <ListItemIcon><Checkbox checked={checked} onChange={toggle} value={index}/> </ ListItemIcon> <ListItemText> {time} </ListItemText></ListItem>
  		);
  	}.bind(this));
		return (
			<List id="filterTimes"> {listitems} </List>
		);
	
	};

}

export default TimePopup;