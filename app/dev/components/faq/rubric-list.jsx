import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchRubrics, deleteRubric, updateRubric, selectRubric } from '../../actions/actions-faq';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RubricAddItem from './rubric-add-item.jsx';
import { Link } from 'react-router-dom';

class RubricList extends React.Component {

	componentWillMount() {
		this.props.fetchRubrics();

	}

	getRubricList() {
		console.log("getRubricList here");
      	return this.props.rubrics.map((rubric) => {
	        return (
	        	<li key={rubric._id}> 
					<Link to={`/faqs/${rubric._id}`} onClick={() => this.props.selectRubric(rubric)} >{rubric.name} </Link>
					<button onClick={() => this.props.deleteRubric(rubric._id, rubric)}>x</button>
					<button onClick={() => this.props.updateRubric(rubric._id)}>Edit</button>
				</li>
	        )

       	});	   
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
	selectRubric: PropTypes.func

}


//connects allreducer to props
function mapStateToProps (state) {
	return {
		rubrics: state.rubrics.rubricItems
	};	
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRubrics: fetchRubrics,
    deleteRubric: deleteRubric,
    updateRubric: updateRubric,
    selectRubric: selectRubric
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(RubricList);