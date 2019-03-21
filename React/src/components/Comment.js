/**
 * 组件定义
    * 函数数组
    * 类组件

    * 函数式编程
 */

 import React from 'react';

 import CommentForm from './ComentForm';
 import CommentContent from './CommentContent';

 class Comment extends React.Component{
    // 这种写法，state会成为实例的属性
    // state = {
    //     datalist:[]
    // }
    constructor(){
        // 在类继承的构造函数中，要使用this，必须先执行super()
        // 执行super()后才有this对象
        super();// React.Component.call(this)
        this.state = {
            datalist:[{
                id:Date.now(),
                text:'在吗',
                time:Date.now()
            }],
            num:10
        }


        this.addItem = this.addItem.bind(this);//
    }

    // 添加数据
    addItem(msg){

        // 修改state的唯一方式
        // 每一个的setState都会进入修改队列
        this.setState({
            datalist:[...this.state.datalist,{text:msg,id:Date.now(),time:Date.now()}],
            // num:this.state.num+1
        },()=>{
            // console.log('num::',this.state.num)
        })

        // this.setState((state)=>{
        //     return {num:state.num+1}
        // })

        // console.log('num:',this.state.num)
    }

     render(){
         return <div className="comment">
            <h4>Comments</h4>
            <CommentContent datalist={this.state.datalist}/>
            <CommentForm addItem={this.addItem}/>
         </div>
     }
 }


 export default Comment;