import React, {Component} from 'react';
import {connect} from 'react-redux';

class FaqDetail extends Component {
	
	render() {
		if(!this.props.faqActive){
			return (<h4>Select a category ...</h4>)
		}
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

// reducer
function mapStateToProps (state) {
	return {
		faqActive: state.faqActive
	};	
}


export default connect(mapStateToProps)(FaqDetail);


