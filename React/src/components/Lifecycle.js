import React,{Component} from 'react';

import PropTypes from 'prop-types';

export default class Lifecycle extends Component{
    constructor(props,context){
        // 初始化
        super();

        console.log('constructor',props,context);

        this.state = {
            num:10
        }

        this.handleClick = this.handleClick.bind(this);
    }

    // 生命周期函数中的this指向实例
    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnMount(){
        console.log('componentWillUnMount')
    }

    // 是否渲染组件
    // 必须返回一个布尔值（默认返回true）
    // 在实际开发中，一般用于性能优化
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.num == this.props.num){
            return false;
        }

        return true;
        // return nextState.num>15;
    }

    handleClick(){
        this.setState({
            num:this.state.num+1
        })
    }
    

    render(){
        return <div>
            <h4>生命周期函数</h4>
            {this.state.num}

            <button onClick={this.handleClick}>修改num</button>
        </div>
    }
}

// Lifecycle.contextTypes = {
//     num:PropTypes.number,
//     deleteItem:PropTypes.func
// }