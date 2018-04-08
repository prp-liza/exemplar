import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RubricList from './rubric-list.jsx';
import {Link} from 'react-router-dom';


// detail of the rubric selected

class RubricDetail extends Component {

	RubricActiveDetail(props) {

		console.log("match.params:", this.props.match.params.rubricSlug);

		// check URL
		const rubricSlug = this.props.match.params.rubricSlug;
		const rubric = this.props.rubrics.find(({slug}) => slug === rubricSlug);

		// console.log(rubric);

		if (!rubric){
			return (
				<div>
					<h1> This rubric doesn't exist</h1>
				</div>
			);	
		} else {
			// grap data
			const detail = rubric.content.map((content) =>
				<div key={content.id}> 
					<p> <strong>{content.question}</strong></p>
					<p> {content.answer} </p>
					<ul> <i> {content.tags.map((tag,i)=><li key={i}>{tag}</li>)} </i> </ul>
				</div>
			);

			return (
				<div>
					<h1>{rubric.name}</h1>
					<div>
						{detail}
					</div>

				</div>
			);		
		}		
	}

	 
	render() {
		
		return (
		<div>
			<div>
				{this.RubricActiveDetail()}
			</div>
			<div>
				<ul>
					{this.props.rubrics.map((rubric)=>
						<li key={rubric.id}>
							<Link to={`/faq/${rubric.slug}`}>{rubric.name} </Link>
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
		rubrics: state.rubrics
	};	
}


export default connect(mapStateToProps)(RubricDetail);