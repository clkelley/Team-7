import React from 'react';
import './FilterCategory.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText} from '@material-ui/core';


class FilterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {Dates: [], Location: [], Time: [], Category: [], Cost: []},
      anchor: null,
      popup_open: false,
      
    };
    
    this.openPopup = event => this.openPopup2(event);
    this.closePopup = event => this.closePopup2(event);
  }
  
  openPopup2(event) {
  	this.setState({anchor : event.currentTarget, popup_open:true});
  }
  
  closePopup2 (event) {
  	this.setState({anchor: null, popup_open: false});
  }

  render() {

  	const handleDelete = () => {
    	console.info('You clicked the delete icon.');
  	};

    return (
      <Grid container spacing={1} direction="column">
      <Grid container item xs={12} spacing={2} className="filterCategories">
        <Chip variant="outlined" label="Dates" className="dateChip" onClick={this.openPopup}></Chip>
        <Chip variant="outlined" label="Location" className="dateChip" onClick={this.openPopup}></Chip>
        <Chip variant="outlined" label="Time" className="dateChip" onClick={this.openPopup}></Chip>
        <Chip variant="outlined" label="Category" className="dateChip" onClick={this.openPopup}></Chip>
        <Chip variant="outlined" label="Cost" className="dateChip" onClick={this.openPopup}></Chip>
      </Grid>
      <Popover anchorEl={this.state.anchor} onClose={this.closePopup} open={this.state.popup_open} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
      	<List> 
      		<ListItem> 
      			<ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> first element </ListItemText>
      		</ListItem>
      		<ListItem> 
      			<ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> second element </ListItemText> 
      		</ListItem> 
      		<ListItem> 
      			<ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> third element </ListItemText> 
      		</ListItem> 
      		<ListItem> 
      			<ListItemIcon><Checkbox /> </ ListItemIcon> <ListItemText> fourth element </ListItemText> 
      		</ListItem> 
      	</List>
      </ Popover>
      <Grid container item xs={12} spacing={2} className="filterCategories2">
        <Chip variant="outlined" label="2/22" className="filter" onDelete={handleDelete}></Chip>
        <Chip variant="outlined" label="2/23" className="filter" onDelete={handleDelete}></Chip>
        <Chip variant="outlined" label="Palo Alto, Ca" className="filter" onDelete={handleDelete}></Chip>
      </Grid>
      </Grid>
    );
  }
}

export default FilterCategory;
