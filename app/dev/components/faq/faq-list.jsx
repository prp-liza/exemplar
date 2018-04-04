import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {selectFaq} from '../../actions/faqActions';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class FaqList extends React.Component {

	createListFaq() {
		return this.props.faqs.map(faq =>{
			// console.log(faq);
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



//props validation
FaqList.propTypes  = {
	faqs: PropTypes.array,
	selectFaq: PropTypes.func
}


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