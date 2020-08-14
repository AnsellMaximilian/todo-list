import React from 'react';

class Toolbar extends React.Component {

    render(){
        return(
            <ul id="toolbar">
                <li onClick={this.props.markAllDone}>Mark All Done</li>
                <li onClick={this.props.deleteCompleted}>Delete Completed</li>
                <li onClick={this.props.deleteAll}>Delete All</li>
            </ul>
        )
    }

}

export default Toolbar;