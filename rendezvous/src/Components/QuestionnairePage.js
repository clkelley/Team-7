import React from 'react';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid, TextField, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room } from '@material-ui/icons'
import Firebase from 'firebase'
import { db } from '../firebase';



const SingleQuestionRange = (props) => {
	return <Grid item xs={12}><Card>
					<Typography>
						{props.question}
					</Typography>
					<FormControl component="fieldset">
					<RadioGroup row>
						<FormControlLabel value={1} control={<Radio />} label={props.left} labelPlacement="bottom" />
						<FormControlLabel value={2} control={<Radio />} label="" labelPlacement="bottom"/>
						<FormControlLabel value={3} control={<Radio />} label="" labelPlacement="bottom" />
						<FormControlLabel value={4} control={<Radio />} label="" labelPlacement="bottom" />
						<FormControlLabel value={5} control={<Radio />} label={props.right} labelPlacement="bottom" />
					</RadioGroup>
					</FormControl>
					</Card></Grid>
}

const SingleQuestionTextInput = (props) => {
	return <Grid item xs={12}>
					<Card>
					<Typography>
						{props.question}
					</Typography>
					<FormControl fullWidth component="fieldset">
					<TextField width="100%" id="outlined-basic" label="Outlined" variant="outlined" />
					</FormControl>
					</Card>
					</Grid>

}

class QuestionnairePage extends React.Component {

  constructor(props) {
	super(props);
	}

	componentDidMount(){
		Firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
        console.log(user)
				this.setState({ userId: user.uid });
        this.retrieveQuestions()
			} else {
				this.setState({ user: null });
			}

			if (this.state.loading) {
				this.setState({ loading: false });
			}
    }.bind(this));
	 }

	 retrieveQuestions() {
		// const snapshot = await firebase.firestore().collection('events').get()
    // const documents = [];
    // snapshot.forEach(doc => {
    //    documents[doc.id] = doc.data();
    // });
    // return documents;
     var snapshot = db.collection("questionaire");
     snapshot.get().then( function(docs){
			 const documents = []
			 docs.forEach(doc => {
				 documents[doc.id] = doc.data();
			 })
			 console.log(documents);
			 this.setState({questionnaire: documents});
       // if(docs.exists){
       //   this.setState({questions: doc.data()})
       //   console.log(doc.data())
       // } else {
       //   console.log("doc didn't exist") // NEED TO FIX THIS UP
       // }
     }.bind(this)).catch(function(error) {
       console.log("Error getting document:", error);
     });

   }


  render() {
		let questionCards = <div>Loading</div>;
		if(this.state && this.state.questionnaire){
			questionCards = []
			for (var questionKey in this.state.questionnaire){
				questionCards.push(<SingleQuestionTextInput question={questionKey} key={questionKey}/>
				);
			}
			// questionCards = this.state.questionnaire.map(function(question) {
	  	// 	return (
	  	// 		<EventCard eventId={eventId} key={eventId}/>
	  	// 	);
		}
		//fetch questions and responses`
		//display them here
		//on submit, put them into database
		//
    return (
		<div>
			<Grid container spacing={1} style={{ padding: 100}}>
				<Grid item xs={12}>
				<Typography variant="h1">
					test
				</Typography>
				</Grid>
				{questionCards}
				<SingleQuestionTextInput question={"Test"}/>
				<SingleQuestionRange question={"TestRadio"} left={"left"} right={"right"}/>
			</Grid>
		</div>);
  }
}

export default QuestionnairePage;
