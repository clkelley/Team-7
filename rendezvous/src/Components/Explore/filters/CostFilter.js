import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import {Chip, Popover, List, ListItem, Checkbox, ListItemIcon, ListItemText, TextField} from '@material-ui/core';





class CostPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters : this.props.curFils,
		};
		
		this.onChange = event => this.onChange2(event);
	}
	
	onChange2(event) {
		var newArr = this.state.filters;
		newArr[event.target.value] = !newArr[event.target.value];
		this.setState({filters: newArr}, this.props.changeCost(this.state.filters));
	}
	
	render () {
		let costs = ["free", "under $20", "$20-$50", "$50+",];
		let listitems = costs.map(function(cost, index) {
			let check = this.state.filters[index];
			let toggle = this.onChange;
  			return (
  				<ListItem key={cost}> 
  					<ListItemIcon><Checkbox checked={check} onChange={toggle} value={index} /> </ ListItemIcon> 
  					<ListItemText> {cost} </ListItemText>
  				</ListItem>
  			);
  		}.bind(this));
  		
	
		return (
			<List id="filterCosts"> {listitems} </List>
		);
	
	};

}

export default CostPopup;