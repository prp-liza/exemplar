import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {selectFaq} from '../../actions/index';
import {bindActionCreators} from 'redux';

class FaqList extends React.Component {

	createListFaq() {
		return this.props.faqs.map(faq =>{
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