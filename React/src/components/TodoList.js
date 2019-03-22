import React,{Component} from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            datalist:[]
        }
    }

    addItem(msg){
        let item = {
            msg,
            id:Date.now(),
            time:Date.now()
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

    render(){
        let {datalist} = this.state;
        return (
            <div className="todo-list">
                <h1>TodoList</h1>
                <TodoForm addItem={this.addItem.bind(this)}/>
                <TodoContent data={datalist}/>
            </div>
        )
    }
}

export default TodoList;