import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class RubricDetail extends Component {

	RubricActiveDetail() {
		const detail = this.props.rubricActive.content.map((content) =>
			<div key={content.id}> 
				<h2> {content.question} </h2>
				<p> {content.answer} </p>
				<p> {content.tags.map((tag,i)=><li key={i}>{tag}</li>)} </p>
			</div>
		);
		return (
			<div>
				{detail}
			</div>
		);		
	}
	 
	render() {

		if(!this.props.rubricActive){
			return (<h4>Select a rubric ...</h4>)
		}

		return (			
			<div>
				<h2> {this.props.rubricActive.name} </h2>
				<div>{this.RubricActiveDetail()}</div>
				
			</div>
		);
	}
}


//props validation
RubricDetail.propTypes  = {
	rubricActive: PropTypes.object,
}


// reducer
function mapStateToProps (state) {
	return {
		rubricActive: state.rubricActive
	};	
}


export default connect(mapStateToProps)(RubricDetail);