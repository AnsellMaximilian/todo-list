import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render(){
        const todos = this.props.todos.map((todo) => {
            return <TodoItem details={todo} key={todo.id} toggleItem={this.props.toggleItem} deleteItem={this.props.deleteItem}/>
        });

        return(
            <div id="todo-list">
                {todos}
            </div>
        )
    }

}

export default TodoList;