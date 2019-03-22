import React,{Component} from 'react';

import TodoButton from './TodoButton';

import formatDate from '../utils/formatDate';

import PropTypes from 'prop-types';

let TodoItem = ({data,idx,deleteItem,completeItem},context)=>{
    // let ele = null;
    // if(!data.done){
    //     ele = <button onClick={completeItem.bind(this,data.id)}>完成</button>
    // }

    console.log('TodoItem:',context)

    return (
        <div className="todo-item">
            {idx+1} - {data.msg} - {formatDate(data.time,'YYYY/MM/DD hh:mm:ss')}
            {
                data.done ? null : <TodoButton handleClick={completeItem.bind(this,data.id)}>完成</TodoButton>
            }
            <TodoButton handleClick={deleteItem.bind(this,data.id)}>删除</TodoButton>
        </div>
    )
}

// context使用第三步：验证数据类型
TodoItem.contextTypes = {
    num:PropTypes.number,
    deleteItem:PropTypes.func
}

export default TodoItem;