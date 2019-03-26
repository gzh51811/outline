import React from 'react';

import url from 'url';

import withAxios from '../hoc/withAxios'


let Goods = (props)=>{
    console.log(props)
    let {axios,location} = props;
    let {query} = url.parse(location.search,true);

    (async ()=>{
        let {data} = await axios.get('/mobile/index.php',{
            params:{
                act:'goods',
                op:'goods_detail',
                goods_id:query.id
            }
        })
        console.log(data);
    })()
    

    return <div className="goods">
        商品
    </div>
}

export default withAxios(Goods);