import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';

class CatPopup extends React.Component {
	render () {
	
	let cats = ["exercise", "music", "entertainment", "sports", "food", "drinks", "leisure"];
	let listitems = cats.map(function(cat) {
  		return (
  			<ListItem key={cat}> <ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> {cat} </ListItemText></ListItem>
  		);
  	});
	
		return (
			<List id="filterCats"> {listitems} </List>
		);
	
	};

}

export default CatPopup;
