import React from 'react';
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput';
import Toolbar from './components/Toolbar';
import appController from './controller/appController';
import './App.css';

class App extends React.Component {
  state = {
    todos: appController.getFromStorage(),
  }

  addTodoItem = (todoItem) => {
    const todos = this.state.todos;
    const newTodo = {
      id: appController.getId(),
      title: todoItem,
      done: false,
    } 
    todos.push(newTodo);
    appController.saveToStorage(todos);
    this.setState({
        todos: todos,
    })
  }

  toggleTodoStatus = (id) => {
    const todos = this.state.todos.map(function(todo){
      if(todo.id === id) todo.done = !todo.done;
      return todo;
    });
    appController.saveToStorage(todos);

    this.setState({
      todos: todos
    })
  }

  deleteTodoItem = (id) => {
    const todos = this.state.todos.filter(function(todo){
      return todo.id !== id;
    });
    appController.saveToStorage(todos);
    this.setState({
      todos: todos
    })
  }

  deleteCompleted = () => {
    const todos = this.state.todos.filter(function(todo){
      return !todo.done;
    })
    appController.saveToStorage(todos);
    this.setState({
      todos: todos
    })
  }

  deleteAll = () => {
    const todos = [];
    appController.saveToStorage(todos);
    this.setState({
      todos: todos
    })
  }

  markAllDone = () => {
    const todos = this.state.todos.map(function(todo){
      todo.done = true;
      return todo;
    });
    appController.saveToStorage(todos);

    this.setState({
      todos: todos
    })
  }

  render(){
    return (
      <div className="App">
        <Header title="Todo List"/>
        <Toolbar 
          markAllDone={this.markAllDone}
          deleteCompleted={this.deleteCompleted}
          deleteAll={this.deleteAll}
        />
        <TodoInput saveItem={this.addTodoItem}/>
        <TodoList todos={this.state.todos} toggleItem={this.toggleTodoStatus} deleteItem={this.deleteTodoItem}/>
      </div>
    );
  }
}
  

export default App;
