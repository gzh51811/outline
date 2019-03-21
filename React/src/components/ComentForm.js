/**
 * 组件定义
    * 函数数组
    * 类组件
        * ES6 class
        * 必须有一个render方法
    * 函数式编程
 */

 import React from 'react';

 class ComementForm extends React.Component{
     constructor(){
         super();
         this.state = {
             msg:''
         }
     }

    changeMsg(e){
        console.log(this)
        this.setState({
            msg:e.target.value
        })
    }

    handleSend(e){
        let {addItem} = this.props;
        addItem(this.state.msg);

        // 清空并自动获得焦点
        this.setState({
            msg:''
        })

        // e.target.previousElementSibling.focus();
        this.refs.msg.focus();
    }
    render(){
        // render方法等效于函数组件
        // this.props获取传入的参数
        let {msg} = this.state;
        
        return (
            <div className="comment-form">
                <textarea value={msg} onChange={this.changeMsg.bind(this)} ref="msg"></textarea>
                <button onClick={this.handleSend.bind(this)}>发送</button>
            </div>
        )
    }
 }

 export default ComementForm;