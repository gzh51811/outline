import React,{Component} from 'react';

import url from 'url';

import withAxios from '../hoc/withAxios';

import { Button, Icon } from 'antd';

import {connect} from 'react-redux';

// action creator
import cartAction from '../actions/cartAction';

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

    // add2cart(){
    //     // store.dispatch({type:'add_to_cart',payload:{goods_id:123}})
    // }

    render(){
        console.log('goods:',this);
        let {info} = this.state;
        let {add2cart,inCart} = this.props;
        return <div className="goods" style={{padding:'15px'}}>
            <img src={info.goods_image}/>
            <h4>{info.goods_name}</h4>
            <p className="price"><del>{info.goods_marketprice}</del> <span>{info.goods_price}</span></p>
            <Button type="primary" size="large" onClick={add2cart.bind(this,info,inCart)}><Icon type="shopping-cart"/>加入购物车</Button>
        </div>
    }
}

Goods = withAxios(Goods)

Goods = connect((state,ownProps)=>{
    return {
        inCart:state.cart.goodslist.filter(goods=>goods.goods_id==ownProps.match.params.id)[0]
    }
},(dispatch,ownProps)=>{

    return {
        add2cart(goods,inCart){
            // 判断商品是否第一次添加
            if(inCart){
                dispatch(cartAction.changeqty(goods.goods_id,inCart.qty+1))
            }else{
                goods.qty = 1;
                dispatch(cartAction.add(goods))

            }
        }
    }
})(Goods)

export default Goods