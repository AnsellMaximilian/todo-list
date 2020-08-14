import React from 'react'

class TodoInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    submit = e => {
        e.preventDefault();
        this.props.saveItem(this.state.title);
        this.setState({ title: ''});
    }

    updateValue = e => {
        this.setState({
            title: e.target.value
        })
    }

    render(){
        return (
            <form id="todo-input">
                <label htmlFor="title-input">
                    <input type="text" id="title-input" value={this.state.title} onChange={this.updateValue}/>
                </label>
                <button onClick={this.submit}>Enter</button>
            </form>
        )
    }
}

export default TodoInput;