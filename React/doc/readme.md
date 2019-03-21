# day5-4

* 路由
* vuex

* JSX
    <div>
        <h4>xxx</h4>
    </div>

* diff 算法

* 传统节点操作：
    ele.innerHTML = 'laoxie';
    ele.innerHTML = 'lemon';
    ele.innerHTML = 'laoxie';
* 虚拟DOM
    vNode.innerHTML = 'laoxie';{type:'div',children:['laoxie']}
    vNode.innerHTML = 'lemon';{type:'div',children:['lemon']}
    vNode.innerHTML = 'laoxie';{type:'div',children:['laoxie']}
        diff 算法
    结论：不操作真实DOM节点


    PS：节点操作不可避免，但我们可以减少操作次数

* Vue的组件定义
    * 全局：Vue.component()
    * components