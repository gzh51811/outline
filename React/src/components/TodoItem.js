import React,{Component} from 'react';

import TodoButton from './TodoButton';

let TodoItem = ({data})=>{
    return (
        <div className="todo-item">
            {
                data.msg
            }
        </div>
    )
}

export default TodoItem;