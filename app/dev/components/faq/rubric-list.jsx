import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {selectRubric} from '../../actions/actions-faq';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import RubricAddItem from './rubric-add-item.jsx';
import {Link} from 'react-router-dom';

class RubricList extends React.Component {

	createRubricList() {
		return this.props.rubrics.map(rubric =>{
			// console.log(rubric);
			return (
				<li 
					key={rubric.id}
					onClick={() => this.props.selectRubric(rubric)}
				> 
					<Link to={`/faq/${rubric.slug}`}>{rubric.name} </Link>
					
				</li>
			)
		})
	}

	render() {
	    return (
		    <div>		    	
		    	<h1>Rubric List</h1>
		    	<ul>{this.createRubricList()}</ul>
		    	<hr/>
		    	<RubricAddItem/>				
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