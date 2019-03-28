import React, { Component } from 'react';

import { List,InputNumber,Icon,Button,Row,Col } from 'antd';
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
        let {goodslist,total,changeqty,remove,clear} = this.props;

        return <div className="home" style={{padding:'15px'}}>
            <List
                itemLayout="horizontal">
                {
                    goodslist.map(goods => {
                        return <List.Item key={goods.goods_id} actions={[<Icon type="close" onClick={remove.bind(this,goods.goods_id)}/>]}>
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
            <Row gutter={10}>
                <Col span={12}>
                    <Button onClick={clear}>清空购物车</Button>
                </Col>
                <Col span={12} style={{textAlign:'right'}}>
                    总价：<span style={{color:'#f00'}}>￥{total.toFixed(2)}</span>
                </Col>
            </Row>
        </div>
    }
}

Cart = connect(
    state=>({
        goodslist:state.cart.goodslist,
        total:state.cart.goodslist.reduce((prev,current)=>prev+current.goods_price*current.qty,0)
    }),
    dispatch=>bindActionCreators(cartAction,dispatch)
)(Cart)


export default Cart;