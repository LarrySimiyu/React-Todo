import React from 'react';

const Todo = props => {
    return ( 
        <li>
            <h1>{props.task}</h1>
        </li>
     );
}
 
export default Todo;