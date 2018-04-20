import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRubricContent } from '../../actions/actions-faq';
import { Redirect } from 'react-router';

class RubricAddContent extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  question: "",
		  answer: ""

		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		
		const contentData = {
			question: this.state.question,
			answer: this.state.answer,
			_id: Math.random()		
		};

		this.props.createRubricContent(this.props.rubricSelected, contentData);

		// reset the input after the data has been sent
		this.setState({question : ""});
		this.setState({answer : ""});
	}

	render() {
		return (
			<div>
				<h3>Add content</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Question: </label> <br/>
						<input
							type="text" 
							name="question" 
							onChange={this.onChange}
							value={this.state.question}
						/>
					</div>
					<div>
						<label>Answer: </label> <br/>
						<input
							type="text" 
							name="answer" 
							onChange={this.onChange}
							value={this.state.answer}
						/>
					</div>
					<input 
						type="submit" 
						value="Submit" 
					/>
				</form>			
			</div>
		);


	}
}



//props validation
RubricAddContent.propTypes  = {
	createRubricContent: PropTypes.func
}

// reducer
function mapStateToProps (state) {
	return {
		rubricSelected: state.rubrics.rubricSelected
	};	
}

export default connect(mapStateToProps, { createRubricContent })(RubricAddContent);
