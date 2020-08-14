import React from 'react';

class TodoItem extends React.Component {

    toggleItem = e => {
        e.preventDefault();
        this.props.toggleItem(this.props.details.id);
    }

    deleteItem = e => {
        e.preventDefault();
        this.props.deleteItem(this.props.details.id);
    }
    render(){
        return(
            <div className={`todo-item ${this.props.details.done ? "done" : "not-done"}`}>
                <span className="todo-title">{this.props.details.title}</span>
                <div className="todo-status"><button onClick={this.toggleItem}>{this.props.details.done ? "Done" : "Mark As Done"}</button></div>
                <button className="todo-delete" onClick={this.deleteItem}>X</button>
            </div>
        )
    }

}

export default TodoItem;