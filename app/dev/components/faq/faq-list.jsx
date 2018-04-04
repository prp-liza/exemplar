import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
<<<<<<< HEAD
import {selectFaq} from '../../actions/faqActions';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
=======
import {selectFaq} from '../../actions/index';
import {bindActionCreators} from 'redux';
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d

class FaqList extends React.Component {

	createListFaq() {
		return this.props.faqs.map(faq =>{
<<<<<<< HEAD
			// console.log(faq);
=======
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d
			return (
				<li 
					key={faq.id}
					onClick={() => this.props.selectFaq(faq)}
				> 
					{faq.category} 
				</li>
			)
		})
	}

	render() {
	    return (
		    <div>
		    	<h1>Category List</h1>
		    	<ul>{this.createListFaq()}</ul>
		    </div>	      
	    );
  	}
}


<<<<<<< HEAD

//props validation
FaqList.propTypes  = {
	faqs: PropTypes.array,
	selectFaq: PropTypes.func
}


=======
>>>>>>> 66eefe2c1430de6e43cfe146088b9b080834196d
// reducer
function mapStateToProps (state) {
	return {
		faqs: state.faqs
	};	
}

// action
function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectFaq: selectFaq}, dispatch)	
}


export default connect(mapStateToProps, matchDispatchToProps)(FaqList);