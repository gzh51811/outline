import React from 'react';

import withAxios from '../hoc/withAxios';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            datalist:[]
        }
    }
    componentWillMount(){
        console.log(this)

        // 使用axios
        this.props.axios.get('/mobile/index.php?act=goods&op=goods_list&keyword=&page=10&curpage=1').then(res=>{
            console.log(res)
        })
    }
    render(){
        return <div className="home">
            列表
        </div>
    }
}

List = withAxios(List);

export default List;