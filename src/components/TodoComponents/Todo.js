import React from 'react';

const Todo = props => {
    return ( 
        <li>
            <h1 style={props.completed ? { textDecoration: 'line-through' } : null}
                onClick={() => props.toggleItem(props.id)}>
                {props.task}
                </h1>
        </li>
     );
}

export default Todo;