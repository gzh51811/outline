import React,{Component} from 'react';


class TodoForm extends Component{
    // constructor(){
    //     super();

    //     this.state = {
    //         msg:'asdf'
    //     }
    // }

    // 这种写法需要：@babel/plugin-proposal-class-properties 插件的支持
    // 实例属性
    state = {
        msg:'laoxie'
    }

    handleChange(e){
        // console.log(this)

        this.setState({
            msg:e.target.value
        })
    }

    handleClick(){
        let {addItem} = this.props;

        addItem(this.state.msg);

        this.setState({
            msg:''
        })
        this.refs.msg.focus();
    }

    // 箭头函数的写法：成为实例的方法
    // 需要插件的支持：@babel/plugin-proposal-class-properties
    // handleChange2 = ()=>{
    //     console.log('2:',this)
    // }

    // 传统函数写法：成为原型的方法
    render(){console.log(this)
        let {msg} = this.state;
        
        return (
            <div className="todo-list">
                <input type="text" value={msg} onChange={this.handleChange.bind(this)} ref="msg"/>
                <button onClick={this.handleClick.bind(this)}>添加</button>
            </div>
        )
    }
}

export default TodoForm;