import React,{Component} from 'react';

import url from 'url';

import withAxios from '../hoc/withAxios';

import { Button, Icon } from 'antd';
import store from '../store';

class Goods extends Component{
    constructor(){
        super();

        this.state = {
            info:{}
        }
    }

    async componentWillMount(){
        let {axios,location} = this.props;
        let {query} = url.parse(location.search,true);
    

        let {data} = await axios.get('/mobile/index.php',{
            params:{
                act:'goods',
                op:'goods_detail',
                goods_id:query.id
            }
        })

        console.log(data);

        this.setState({
            info:{
                goods_image:data.datas.goods_image,
                ...data.datas.goods_info
            }
        })
        
    }

    add2cart(){
        store.dispatch({type:'add_to_cart',payload:{goods_id:123}})
    }

    render(){
        let {info} = this.state;
        return <div className="goods" style={{padding:'15px'}}>
            <img src={info.goods_image}/>
            <h4>{info.goods_name}</h4>
            <p className="price"><del>{info.goods_marketprice}</del> <span>{info.goods_price}</span></p>
            <Button type="primary" size="large" onClick={this.add2cart}><Icon type="shopping-cart"/>加入购物车</Button>
        </div>
    }
}

export default withAxios(Goods);