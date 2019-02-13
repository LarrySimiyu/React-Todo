// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return ( 
        <div>
            <h1>TO BE DONE</h1>
            <ul>
                {props.list.map((listItem, index) => {
                return <Todo task={listItem.task} /> 
            }
                    )}
            </ul>
        </div>
     );
}
 
export default TodoList;
