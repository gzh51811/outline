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
    render(){
        // render方法等效于函数组件
        // this.props获取传入的参数
        return (
            <div className="comment-form">
                <textarea value={this.state.msg} onChange={this.changeMsg.bind(this)}></textarea>
                <button onClick={()=>{this.props.onAdd(this.state.msg)}}>发送</button>
            </div>
        )
    }
 }

 export default ComementForm;