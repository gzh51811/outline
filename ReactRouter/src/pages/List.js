import React from 'react';

import "regenerator-runtime/runtime";

import withAxios from '../hoc/withAxios';

@withAxios
class List extends React.Component{
    constructor(){
        super();
        this.state = {
            datalist:[]
        }
    }
    
    async componentWillMount(){
        console.log(this)

        // 使用axios
        let res = await this.props.axios.get('/mobile/index.php',{
            params:{
                act:'goods',
                op:'goods_list',
                keyword:'',
                page:10,
                curpage:1
            }
        });

        console.log(res)
    }
    render(){
        return <div className="home">
            列表
        </div>
    }
}

// 高阶组件的应用
// List = withAxios(List);

export default List;