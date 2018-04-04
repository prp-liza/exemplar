import React, {Component} from 'react';
import {connect} from 'react-redux';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d

class FaqDetail extends Component {
	
	render() {
		if(!this.props.faqActive){
			return (<h4>Select a category ...</h4>)
		}
<<<<<<< HEAD
		console.log(this.props.faqActive);
		return (

			<div>
				<img src={this.props.faqActive.content.thumbnail}/>
=======
		return (
			<div>
				<img src={this.props.faqActive.thumbnail}/>
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d
				<h2> {this.props.faqActive.title} </h2>
				<p> {this.props.faqActive.answer} </p>
				<h4> Like : {this.props.faqActive.like} </h4>
				<h4> Dislike : {this.props.faqActive.dislike} </h4>
			</div>
		);
	}
}

<<<<<<< HEAD

//props validation
FaqDetail.propTypes  = {
	faqActive: PropTypes.object,
}


=======
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d
// reducer
function mapStateToProps (state) {
	return {
		faqActive: state.faqActive
	};	
}


export default connect(mapStateToProps)(FaqDetail);


