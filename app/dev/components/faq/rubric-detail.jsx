import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RubricList from './rubric-list.jsx';
import RubricAddContent from './rubric-add-content.jsx';
import {Link} from 'react-router-dom';
import { selectRubric } from '../../actions/actions-faq';
import { bindActionCreators } from 'redux';

// detail of the rubric selected

class RubricDetail extends Component {

	componentWillMount() {

	}


	getDetail() {
		console.log("getdetail here");
		const rubricId = this.props.match.params.id;
		const rubric = this.props.rubrics.find(({_id}) => _id === rubricId);
		this.props.selectRubric(rubric);
		console.log(this.props.rubrics);		
		const detail = this.props.rubricSelected.content.map((content) =>
			<div key={content._id}> 
				<p> <strong>{content._id}</strong></p>
				<p> {content.answer} </p>
			</div>
		);

		return (

			<div>
				<h1>{this.props.rubricSelected.name}</h1>
				<div>
					{detail}
				</div>
				
			</div>
		);		
	}		

	render() {
		console.log("return here");
		// grap data
		return (
			<div>
				<div>
					{this.getDetail()}
				</div>
				<hr/>
	    		<RubricAddContent/>
				<div>
					<ul>
						{this.props.rubrics.map((rubric)=>
							<li key={rubric._id}>
								<Link to={`/faqs/${rubric._id}`} onClick={() => this.props.selectRubric(rubric)} >{rubric.name} </Link>
							</li>)
						} 
					</ul>
				</div>			
			</div>			
		);
	}
}


//props validation
RubricDetail.propTypes  = {
	rubrics: PropTypes.array
}


// reducer
function mapStateToProps (state) {
	return {		
		rubrics: state.rubrics.rubricItems,
		rubricSelected: state.rubrics.rubricSelected
		
	};	
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectRubric: selectRubric
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RubricDetail);