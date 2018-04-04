import React, { Component } from 'react';

class FaqAddItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  title: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		
		const post={
			title: this.state.title
		}

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(post)
		})
    	.then(res => res.json())
    	.then(data => this.setState({ post: data }));      
	}

	render() {
		return (
			<div>
				<h3>Add category</h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title : </label> <br/>
						<input
							type="text" 
							name="title" 
							onChange={this.onChange}
							value={this.state.title}
						/>
					</div>
					<br/>
					<div>
						<label>Body : </label> <br/>
						<input 							
							type="text" 
							name="body"
							onChange={this.onChange}
							value={this.state.body}
						/>
					</div><br/>
					<input 
						type="submit" 
						value="Submit" 
					/>
				</form>
			</div>
		);
	}
}

export default FaqAddItem;
