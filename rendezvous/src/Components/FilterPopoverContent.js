import React from 'react';
import './FilterPopoverContent.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';

function DatePopup() {
	return<Grid container spacing={2} className="dateGrid"><Grid item xs={8}><DatePicker open="true"/> <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></ Grid><Grid item xs={4}><p className="filler" /> </Grid></Grid>;
}

function LocationPopup() {
	return<TextField variant="outlined" defaultValue="Palo Alto, Ca"> </TextField>;
}

function CostPopup() {
	let costs = ["free", "under $20", "$20-$50", "$50+"];
	let listitems = costs.map(function(cost) {
  		return (
  			<ListItem> <ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> {cost} </ListItemText></ListItem>
  		);
  	});
	return<List> 
      		{listitems}
      	</List>;
}

function CatPopup() {
	let cats = ["exercise", "music", "entertainment", "sports", "food", "drinks", "leisure"];
	let listitems = cats.map(function(cat) {
  		return (
  			<ListItem> <ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> {cat} </ListItemText></ListItem>
  		);
  	});
	return<List> 
      		{listitems}
      	</List>;
}

function TimePopup() {
	let times = ["morning", "afternoon", "evening"];
	let listitems = times.map(function(time) {
  		return (
  			<ListItem> <ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> {time} </ListItemText></ListItem>
  		);
  	});
	return<List> 
      		{listitems}
      	</List>;
}

class FilterPopoverContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
  	
  	if(this.props.elem === "catChip")return<CatPopup />;
  	else if(this.props.elem === "timeChip")return<TimePopup />;
  	else if(this.props.elem === "costChip")return<CostPopup />;
  	else if(this.props.elem === "locChip")return<LocationPopup />;
  	else if(this.props.elem === "dateChip")return<DatePopup />;
  	else return <div> hi</ div>;
  
  
  }

};

export default FilterPopoverContent;
