import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchRubrics } from '../../actions/actions-faq';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import RubricAddItem from './rubric-add-item.jsx';
import { Link } from 'react-router-dom';

class RubricList extends React.Component {

	componentDidMount() {
		this.props.fetchRubrics();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newRubric) {
			this.props.rubrics.unshift(nextProps.newRubric)
		}
	}


	getRubricList() {
	    if(this.props.rubrics) {
	      return this.props.rubrics.map((rubric,i) => {
	        return <li key={rubric.id}> 
					<Link to={`/faq/${rubric.slug}`}>{rubric.name} </Link>					
				</li>
	      });
	    } else {
	      return <h1>nothing</h1>;
	    }
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


export default connect(mapStateToProps, { fetchRubrics })(RubricList);