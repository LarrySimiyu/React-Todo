// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return ( 
        <div>
            <h1>TO BE DONE</h1>
            <ul>
                {props.list.map(listItem => { //maping over an array give each item a unique key
                return <Todo 
                task={listItem.task}
                 key={listItem.id} 
                 completed={listItem.completed}
                 toggleItem={props.toggleItem}
                 id={listItem.id}
                 /> 
            }
                    )}
            </ul>
        </div>
     );
}
 
export default TodoList;
