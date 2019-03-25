import React from 'react';
import axios from 'axios';

axios.defaults.baseURL ='https://www.nanshig.com';

/**
 * 高阶组件：包装函数
 * 必须返回一个React组件
 */
export default (Com)=>{
    return function(){
        return <Com axios={axios}/>
    }
}