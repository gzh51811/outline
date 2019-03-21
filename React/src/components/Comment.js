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
            datalist:['xxx','22xxx','3xxx']
        }

        console.log('Comment:',this)

        this.addItem = this.addItem.bind(this);//
    }

    // 添加数据
    addItem(item){console.log('item:',item,this)
        this.setState({
            datalist:[...this.state.datalist,item]
        })
    }

     render(){

         return <div className="comment">
            <h4>Comments</h4>
            <CommentContent datalist={this.state.datalist}/>
            <CommentForm onAdd={this.addItem}/>
         </div>
     }
 }


 export default Comment;