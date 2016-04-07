import React from 'react';
class ToDoListItem extends React.Component {
	constructor(props)  {
		super(props);

		this.state =  {
			isEditing:  false
		};
	}
	renderTaskSection(){
		const { task, isCompleted} =this.props;
		const taskStyle = {
			color: isCompleted? 'green' : 'red' ,
			 cursor: 'pointer'
		};
		if(this.state.isEditing){
			return(
				<td>
					<form onSubmit={this.onsaveClick.bind(this)}>
					<input type="text" defaultValue={task} ref="editInput"/>
					</form>
				</td>	
				);
		}
		return(
			<td style={taskStyle}
			 onClick= {this.props.toggleTask.bind(this, task)}> 
			 {this.props.task}</td>
		);
	}
	renderActionsSection()     {
		
		if   (this.state.isEditing) {
		return  (
			<td>
	              		<button onClick ={this.onsaveClick.bind(this)} >save</button>
	              		<button  onClick={this.onCancelClick.bind(this)}>cancel</button>
	              	</td>
			);
		}
		return	(
			<td>
	              		<button onClick ={this.onEditClick.bind(this)}>Edit</button>
	             		 <button onClick={this.props.deleteTask.bind(this,this.props.task)}>Delete</button>
	              	</td>
			);
		}


	render(){
		return(
		 	<tr>
		              {this.renderTaskSection()}
		              {this.renderActionsSection()}
			 </tr>
		 
	        );
	}

	onEditClick() {
		this.setState ({ isEditing:     true });
		
	}
	onCancelClick() {
		this.setState ({ isEditing: false});
	}
	onsaveClick(event){
		event.preventDefault();
		console.log(this.props.task);
		const oldTask=this.props.task;
		const newTask=this.refs.editInput.value;
		this.props.saveTask(oldTask , newTask);
		this.setState({ isEditing: false });
	}
}

export default ToDoListItem