import React from 'react';
import '../App.css';
import { Card, CardActionArea, CardActions, CardContent, CardMedia,
				 Button, Typography, IconButton, Grid, TextField, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from '@material-ui/core';
import { BookmarkBorder, Bookmark, Room } from '@material-ui/icons'
import Firebase from 'firebase'
import { db } from '../firebase';



const SingleQuestionRange = (props) => {
	let radioButtons = []
	// console.log("received props: ")
	// console.log(props);
	//props.questionKey is for database
	//props.questionProperties is for display
	for (var propertyKey in props.questionProperties){
		if(propertyKey != "QuestionText"){
	 	radioButtons.push(<FormControlLabel value={propertyKey} key={propertyKey} control={<Radio />} label={props.questionProperties[propertyKey]} labelPlacement="bottom" />);
		}
	}

	let questionText = "loading"
	if(props.questionProperties && props.questionProperties.QuestionText){
		questionText = props.questionProperties.QuestionText;
	}
/*<FormControlLabel value={1} control={<Radio />} label={props.left} labelPlacement="bottom" />
<FormControlLabel value={2} control={<Radio />} label="" labelPlacement="bottom"/>
<FormControlLabel value={3} control={<Radio />} label="" labelPlacement="bottom" />
<FormControlLabel value={4} control={<Radio />} label="" labelPlacement="bottom" />
<FormControlLabel value={5} control={<Radio />} label={props.right} labelPlacement="bottom" />
*/
	return <Grid item xs={12}><Card>
					<Typography>
						{props.questionKey}
					</Typography>
					<Typography>
						{questionText}
					</Typography>
					<FormControl component="fieldset">
					<RadioGroup onChange={props.handleChange} name={props.questionKey} row >
						{radioButtons}
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

//TODO: prevent submit without updating all questions
class QuestionnairePage extends React.Component {

  constructor(props) {
	super(props);

	this.state = {
		errorMessage: "test",
		responses: {}
	}

	console.log("constructor props?");
	console.log(props);
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

	 handleChange = event => {
	 	// this.setState(state => {
	 	// const list = [...state.list, state.value];
	 		this.setState({responses: {...this.state.responses, [event.target.name]: event.target.value}})
	 		// event.target.label
	     // setValue(event.target.value);
			console.log("got change");
	 		console.log(this.state.responses);
	 };

	 retrieveQuestions() {
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



	 updateFirebase = () => {
	     var doc_ref = db.collection("user_questionaire").doc(this.state.userId);
	     doc_ref.set(this.state.responses, {merge:true}).then(() => {
				 console.log("props?");
				 console.log(this.props);
				 this.props.history.push("/profile");
			 });/*.then( function(doc){
	       if(doc.exists){
	         this.setState({matches: doc.data()})
	         this.setState({recommended_events: doc.data()['recommended_events']})
	         console.log(doc.data())
	       } else {
	         console.log("doc didn't exist") // NEED TO FIX THIS UP
	       }
	     }.bind(this)).catch(function(error) {
	       console.log("Error getting document:", error);
	     });*/

	 }

	 handleSubmit = () => {
		 console.log("about to send responses:")
		 console.log(this.state.responses);
		 this.updateFirebase();

	 }


  render() {
		let questionCards = <div>Loading</div>;
		if(this.state && this.state.questionnaire){
			questionCards = []
			for (var questionKey in this.state.questionnaire){
				questionCards.push(<SingleQuestionRange handleChange={this.handleChange} questionKey={questionKey} key={questionKey} questionProperties={this.state.questionnaire[questionKey]}/>
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
				<Grid item xs={12}>
				<Button variant="contained" color="primary" onClick={this.handleSubmit}>
					Submit
				</Button>
				<Typography component="h4" color="error">
          {this.state.errorMessage}
        </Typography>
				</Grid>
			</Grid>
		</div>);
  }
}

export default QuestionnairePage;
