import React from 'react';

import { List} from 'antd';

import store from '../store';

let Cart = ()=>{
    let {goodslist} = store.getState()
    return <div className="home">
        <List
            itemLayout="horizontal">
            {
                goodslist.map(goods => {
                    return <List.Item key={goods.goods_id}>
                        <List.Item.Meta
                            avatar={<img src={goods.goods_image} style={{ width: '120px', height: '120px' }} />}
                            title={goods.goods_name}
                            description={'价格'}
                        />
                    </List.Item>
                })
            }
        </List>
    </div>
}

export default Cart;