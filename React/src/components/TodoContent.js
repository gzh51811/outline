import React,{Component} from 'react';

import TodoItem from './TodoItem';

let TodoConent = ({data})=>{
    return (
        <div className="todo-content">
            {
                data.map((item,idx)=><TodoItem key={item.id} data={item} idx={idx}/>)
            }
        </div>
    )
}

export default TodoConent;