import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {selectRubric} from '../../actions/actions-faq';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import RubricAddItem from './rubric-add-item.jsx';
import RubricDetail from './rubric-detail.jsx';

class RubricList extends React.Component {

	createRubricList() {
		return this.props.rubrics.map(rubric =>{
			// console.log(rubric);
			return (
				<li 
					key={rubric.id}
					onClick={() => this.props.selectRubric(rubric)}
				> 
					{rubric.name} 
				</li>
			)
		})
	}

	render() {
	    return (
		    <div>
		    	<RubricAddItem/>
		    	<h1>Rubric List</h1>
		    	<ul>{this.createRubricList()}</ul>
		    	<hr/>
				<RubricDetail/>	
		    </div>	      
	    );
  	}
}



//props validation
RubricList.propTypes  = {
	rubrics: PropTypes.array,
	selectRubric: PropTypes.func
}


// reducer
function mapStateToProps (state) {
	return {
		rubrics: state.rubrics
	};	
}

// action
function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectRubric: selectRubric}, dispatch)	
}


export default connect(mapStateToProps, matchDispatchToProps)(RubricList);