import React, { Component } from 'react';

import { List,InputNumber } from 'antd';

import store from '../store';



class Cart extends Component{
    constructor(){
        super();
        this.state = {
            ...store.getState()
        }
    }
    componentDidMount(){
       
        
        // 监听store的修改 -> 重新渲染组件
        store.subscribe(()=>{
            // console.log('jt:',store.getState())

            this.setState({
                ...store.getState()
            })
        })
    }
    render(){
        let handleChangeQty = (id,qty)=>{
            console.log(qty,id)
    
            store.dispatch({type:'change_qty',payload:{qty,id}})
        }

        let {goodslist} = this.state;

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
                                    <InputNumber size="small" min={1} max={5} value={goods.qty} onChange={handleChangeQty.bind(this,goods.goods_id)}/>
                                </div>}
                            />
                        </List.Item>
                    })
                }
            </List>
        </div>
    }
}


export default Cart;