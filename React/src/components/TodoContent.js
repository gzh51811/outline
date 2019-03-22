import React,{Component} from 'react';

import TodoItem from './TodoItem';

// 数据类型校验模块
import propTypes from 'prop-types';

let TodoContent = ({data,deleteItem,completeItem})=>{
    let completeItems = data.filter(item=>item.done);
    return (
        <div className="todo-content">
            <div className="todo">
                {
                    data.filter(item=>!item.done).map((item,idx)=><TodoItem 
                    key={item.id} 
                    data={item} 
                    idx={idx} 
                    deleteItem={deleteItem} 
                    completeItem={completeItem}
                    />)
                }
            </div>
            <div className="done">
                {
                    completeItems.map((item,idx)=><TodoItem 
                    key={item.id} 
                    data={item} 
                    idx={idx} 
                    deleteItem={deleteItem} 
                    completeItem={completeItem}
                    />)
                }
            </div>
            
            <div>total:{data.length} / complete:{completeItems.length}</div>
        </div>
    )
}

// props数据类型校验
TodoContent.propTypes = {
    data:propTypes.array.isRequired,
    deleteItem:propTypes.func,
    completeItem:propTypes.func,

    // 自定义校验规则
    age:(props,propName,comName)=>{
        // 年龄必须大于18岁
        // if(typeof props[propName] != 'string'){
        //     return new Error(propName + '必须为字符串');
        // }
        if(props[propName]<18){
            return new Error(propName + '必须大于18岁')
        }
    }
}

// props默认值
TodoContent.defaultProps = {
    data:[]
}

export default TodoContent;