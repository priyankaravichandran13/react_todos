import React from 'react';
import ToDoList from './todo-list';
import CreateTodo from './create-todo';
const todos = [
{
	task: 'make react tutuorial',
	isCompleted: false

},
{
	task: 'eat dinner',
	isCompleted: true
}

];
class App extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
			todos
		};
	}
	render(){
		return(
		 <div>React ToDos App
		 <CreateTodo CreateTask={this.CreateTask.bind(this)} todos={this.state.todos} />
		<ToDoList toggleTask={this.toggleTask.bind(this)} 
		todos={this.state.todos}
		saveTask={this.saveTask.bind(this)} 
		deleteTask={this.deleteTask.bind(this)}/>
		</div>
		);
	}
	CreateTask(task){
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos}); 
	}
	toggleTask(task){

		const foundTodo = _.find(this.state.todos, todo =>todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({ todos: this.state.todos});

	}
	saveTask(oldTask , newTask){
		const foundTodo = _.find(this.state.todos, todo =>todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({ todos: this.state.todos});

	}
	deleteTask(taskToDelete){
		_.remove(this.state.todos, todo =>todo.task === taskToDelete);
		this.setState({todos: this.state.todos});
	}
}

export default App