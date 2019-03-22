import React,{Component} from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

import PropTypes from 'prop-types';

class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            datalist:[]
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }

    // context使用第一步：定义conext的内容
    getChildContext(){
        return {
            num:100,
            deleteItem:this.deleteItem
        }
    }

    addItem(msg){
        let item = {
            msg,
            id:Date.now(),
            time:Date.now(),
            done:false
        }
        this.setState({
            datalist:[...this.state.datalist,item]
        });
        // this.setState(PrevState=>{
        //     return {
        //         datalist:[...PrevState.datalist,item]
        //     }
        // })
    }

    deleteItem(id){
        this.setState({
            datalist:this.state.datalist.filter(item=>item.id!=id)
        })
    }

    completeItem(id){
        this.setState({
            datalist:this.state.datalist.map(item=>{
                if(item.id==id){
                    item.done = true;
                }
                return item;
            })
        })
    }

    render(){
        let {datalist} = this.state;
        return (
            <div className="todo-list">
                <h1>TodoList</h1>
                <TodoForm addItem={this.addItem}/>
                <TodoContent data={datalist} deleteItem={this.deleteItem} completeItem={this.completeItem}/>
            </div>
        )
    }
}

// context使用第二步：验证数据类型
TodoList.childContextTypes = {
    num:PropTypes.number,
    deleteItem:PropTypes.func
}

export default TodoList;