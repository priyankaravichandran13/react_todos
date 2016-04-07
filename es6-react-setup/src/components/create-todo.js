import React from 'react';
class CreateTodo extends React.Component {
	constructor(props){
	super(props);
		this.state= {
				error: null
			};
	}
	renderError(){
		if (!this.state.error){ return null; }
		return <div style={{ color: 'red' }}>{this.state.error}</div>
	}

	render(){
		
		return(
		 <form onSubmit= {this.handleCreate.bind(this)}>
		 	<input  type = " text " placeholder =" what do i need to do ?" ref = "createInput" />
		 	<button>Submit</button>
		 	{this.renderError()}
		 </form>
	);
	}
	handleCreate(event) {
		event.preventDefault();
		const createInput = this.refs.createInput;
		const task = createInput.value;
		const validateInput =this.validateInput(task);
		if(validateInput){
			this.setState({error: validateInput});
			return;
		}
		this.setState({error: null });
		console.log(this.props.CreateTask);
		this.props.CreateTask(task);
		this.refs.createInput.value ="  ";
	}
	validateInput(task){
		if(!task){
			return "plz enter the task";
		} 
		else if ( _.find(this.props.todos ,todo => todo.task === task)) {
			return "task already exists";
		}
		else {
			return null;
		}

	}
}

export default CreateTodo