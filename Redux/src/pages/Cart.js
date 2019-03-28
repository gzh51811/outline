import React, { Component } from 'react';

import { List,InputNumber } from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import cartAction from '../actions/cartAction';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            
        }
    }
    componentDidMount(){
       
        
        
    }
    render(){
        console.log('cart:',this)
        let {goodslist,changeqty} = this.props;

        return <div className="home">
            <List
                itemLayout="horizontal">
                {
                    goodslist.map(goods => {
                        return <List.Item key={goods.goods_id}>
                            <List.Item.Meta
                                avatar={<img src={goods.goods_image} style={{ width: '120px', height: '120px' }} />}
                                title={goods.goods_name}
                                description={<div>
                                    <p className="price"><span>{goods.goods_price}</span></p>
                                    <InputNumber size="small" min={1} max={5} value={goods.qty} onChange={changeqty.bind(this,goods.goods_id)}/>
                                </div>}
                            />
                        </List.Item>
                    })
                }
            </List>
        </div>
    }
}

Cart = connect(
    state=>({
        goodslist:state.goodslist
    }),
    dispatch=>bindActionCreators(cartAction,dispatch)
)(Cart)


export default Cart;