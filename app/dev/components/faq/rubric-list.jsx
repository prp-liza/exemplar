import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchRubrics, deleteRubric, updateRubric } from '../../actions/actions-faq';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RubricAddItem from './rubric-add-item.jsx';
import { Link } from 'react-router-dom';

class RubricList extends React.Component {

	componentDidMount() {
		this.props.fetchRubrics();
	}

	getRubricList() {
      	return this.props.rubrics.map((rubric,i) => {
	        return (
	        	<li key={rubric.id}> 
					<Link to={`/faq/${rubric.slug}`}>{rubric.name} </Link>
					<button onClick={() => this.deleteRubric(rubric.id)}>x</button>
					<button onClick={() => this.updateRubric(rubric.id)}>Edit</button>
				</li>
	        ) 
       	});	   
	}


	deleteRubric(rubricId){
		//console.log('deleting', rubricId);
		this.props.deleteRubric(rubricId)
	}

	updateRubric(rubricId){
		console.log('updating', rubricId);
		this.props.updateRubric(rubricId)
	}


	render() {
	    return (
		    <div>		    	
		    	<h1>Rubric List</h1>
		    	<ul>{this.getRubricList()}</ul>	
		    	<hr/>
		    	<RubricAddItem/>	
		    </div>	      
	    );
  	}
}


//props validation
RubricList.propTypes  = {
	rubrics: PropTypes.array,
	fetchRubrics: PropTypes.func,
	newRubric: PropTypes.object

}


//connects allreducer to props
function mapStateToProps (state) {
	return {
		rubrics: state.rubrics.rubricItems,
		newRubric: state.rubrics.rubricItem
	};	
}


export default connect(mapStateToProps, { fetchRubrics, deleteRubric, updateRubric })(RubricList);