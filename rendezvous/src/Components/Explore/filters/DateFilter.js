import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';

class DatePopup extends React.Component {
	constructor(props) {
		super(props);
		let curFils = this.props.curFils;
		let dtnum = null;
		if(curFils.length > 0) {
			let dt = curFils[curFils.length-1].split(".");
			let yr = parseInt("20"+dt[2]);
			let day = parseInt(dt[1]);
			let mo = parseInt(dt[0]) - 1;
			dtnum = new Date(yr, mo, day);
		} else {
			dtnum = null;
		}
		this.state = {
			filters: curFils,
			selectedDate: dtnum,
		};
		
		this.onChange = date => this.onChange2(date);
	}
	
	onChange2(date) {
		let yrStr = date.getFullYear().toString().substring(2);
		let dateStr = date.getDate().toString();
		let monthNum = date.getMonth() +1;
		let monthStr = monthNum.toString();
		let str = monthStr+"."+ dateStr+"."+yrStr;
		let newArr = this.state.filters;
		if(newArr.indexOf(str) === -1)newArr.push(str);
		this.setState({filters: newArr, selectedDate: date}, this.props.changeDate(this.state.filters));
	}

	render () {
		let selected = this.state.selectedDate;
		return (
			<Grid container spacing={2} className="dateGrid">
					<Grid item xs={8}>
						<DatePicker open="true" id="filterDatePicker" selected={selected} onChange={this.onChange}/> 
						<br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					</ Grid>
					<Grid item xs={4}>
						<p className="filler" /> 
					</Grid>
			</Grid>
		);
	
	};

}

export default DatePopup;