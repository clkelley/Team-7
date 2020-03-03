import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';

class DatePopup extends React.Component {

	render () {
		return (
			<Grid container spacing={2} className="dateGrid">
					<Grid item xs={8}>
						<DatePicker open="true" id="filterDatePicker"/> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					</ Grid>
					<Grid item xs={4}>
						<p className="filler" /> 
					</Grid>
			</Grid>
		);
	
	};

}

export default DatePopup;