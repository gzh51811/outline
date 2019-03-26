import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import "regenerator-runtime/runtime";

import withAxios from '../hoc/withAxios';

import { List, Avatar, Menu, Layout } from 'antd';

const { Header, Content, Sider } = Layout;

@withAxios
class MyList extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: [
                {
                    text: '手机',
                    path: '/phone'
                },
                {
                    text: '电脑',
                    path: '/computer'
                },
                {
                    text: '平板',
                    path: '/pad'
                }
            ],
            current: '/phone',
            datalist: []
        }

        this.gotoGoods = this.gotoGoods.bind(this);
    }

    async componentWillMount() {
        console.log(this)

        // 使用axios
        let { data } = await this.props.axios.get('/mobile/index.php', {
            params: {
                act: 'goods',
                op: 'goods_list',
                keyword: '',
                page: 10,
                curpage: 1
            }
        });

        console.log(data);

        this.setState({
            datalist: data.datas.goods_list
        });


    }

    handleClick = (e) => {console.log(e)
        this.setState({
            current: e.key
        }, () => {
            //路由跳转：编程式导航
            // 利用withRouter()高阶组件实现history的传递

            this.props.history.push(this.props.match.url + e.key);
        });


    }

    gotoGoods(id) {
        console.log(this)
        let { history } = this.props;

        history.push({
            pathname: '/goods/' + id,
            search: '?id=' + id,
            state: {
                id
            }
        })
    }
    render() {
        let {match} = this.props;
        return <div className="home">
            <Layout>
                <Sider>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                    >
                        {
                            this.state.menu.map(item => <Menu.Item key={item.path}>{item.text}</Menu.Item>)
                        }

                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content>
                        <Switch>
                            <Route path={match.path+"/phone"} render={()=><div>手机</div>}/>
                            <Route path={match.path+"/computer"} render={()=><div>电脑</div>}/>
                            <Route path={match.path+"/pad"} render={()=><div>平板</div>}/>
                        </Switch>
                        <List
                            itemLayout="horizontal">
                            {
                                this.state.datalist.map(goods => {
                                    return <List.Item key={goods.goods_id} onClick={this.gotoGoods.bind(this, goods.goods_id)}>
                                        <List.Item.Meta
                                            avatar={<img src={goods.goods_image_url} style={{ width: '120px', height: '120px' }} />}
                                            title={goods.goods_name}
                                            description={goods.store_name}
                                        />
                                    </List.Item>
                                })
                            }
                        </List>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}

// 高阶组件的应用
// List = withAxios(List);

export default MyList;