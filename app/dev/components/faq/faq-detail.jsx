import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class FaqDetail extends Component {
	
	render() {
		if(!this.props.faqActive){
			return (<h4>Select a category ...</h4>)
		}
		console.log(this.props.faqActive);
		return (

			<div>
				<img src={this.props.faqActive.thumbnail}/>
				<h2> {this.props.faqActive.title} </h2>
				<p> {this.props.faqActive.answer} </p>
				<h4> Like : {this.props.faqActive.like} </h4>
				<h4> Dislike : {this.props.faqActive.dislike} </h4>
			</div>
		);
	}
}


//props validation
FaqDetail.propTypes  = {
	faqActive: PropTypes.object,
}


// reducer
function mapStateToProps (state) {
	return {
		faqActive: state.faqActive
	};	
}


export default connect(mapStateToProps)(FaqDetail);