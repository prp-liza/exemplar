import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRubric } from '../../actions/actions-faq';

class RubricAddItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  name: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		const slug = slugify(this.state.name);
		
		const rubric={
			name: this.state.name,
			slug: slug,
			content:[]			
		};

		this.props.createRubric(rubric);

		// reset the input after the data has been sent
		this.setState({name : ""});
		
	}

	render() {
		return (
			<div>
				<h3>Add rubric</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Rubric Name : </label> <br/>
						<input
							type="text" 
							name="name" 
							onChange={this.onChange}
							value={this.state.name}
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


function slugify (text) {
  const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(p, c =>
        b.charAt(a.indexOf(c)))     // Replace special chars
    .replace(/&/g, '-and-')         // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
}


//props validation
RubricAddItem.propTypes  = {
	createRubric: PropTypes.func
}


export default connect(null, { createRubric })(RubricAddItem);
