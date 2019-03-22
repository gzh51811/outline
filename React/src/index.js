import React from 'react';
import {render} from 'react-dom';

import Comment from './components/Comment'
import TodoList from './components/TodoList'

let ele = React.createElement(
    'div',
    {className:'container',id:'box'},
    React.createElement('h2',null,'标题'),
    React.createElement('ul',null,
        React.createElement('li',null,'数据1'),
        React.createElement('li',null,'数据2')
    )
);

console.log('createElement:',ele);

let namelist = ['laoxie666','jingjing','lemon','tingting'];

let username = 'laoxie';

let element = (<div className="container" id="box">
    <h2>标题</h2>
    <ul>
        {/* <li>数据1</li>
        <li>数据2</li> */}

        {
            namelist.map(item=><li key={item}>{item}</li>)
        }
    </ul>
    <p style={{color:'#f00'}}>{username}</p>
    <input type="text"/>
</div>)

console.log('JSX:',element)

// JSX -- Babel --> JS
// JSX 为React.createElement()语法糖
// JSX ： 把html代码与js代码写在一起
render(
    <div>
        <Comment/>
        <TodoList/>
    </div>
    ,
    document.querySelector('#app')
)