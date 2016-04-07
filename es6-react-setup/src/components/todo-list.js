import React from 'react';
import _  from 'lodash';
import ToDoListHeader from './todo-list-header';
import ToDoListItem from './todo-list-item';
class ToDoList extends React.Component {
	renderItem(){
		const props = _.omit(this.props, 'todos');
			return _.map(this.props.todos, (todo , index) => <ToDoListItem key={index
			 } {...todo}  {...props} />);

		         }
	 
	 render(){
console.log(this);
		return(
		 <table>
		 	<ToDoListHeader/>
		 	<tbody>
		 		{this.renderItem()}
		 	</tbody>
		 </table>

	);
	}
}

export default ToDoList