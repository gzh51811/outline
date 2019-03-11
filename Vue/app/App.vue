<template>
    <div>
        <todoList></todoList>

        <myButton>
            <!-- 接收组件内部的数据：作用域插槽slot-scope -->
            <!-- 实现个性化组件内容：处理后再传入组件内部 -->
            <template slot="title" slot-scope="titleScope">
                {{titleScope.title}}
            </template>
            老谢
            <span slot="eng">laoxie</span>
        </myButton>

        <myButton>
            静静
            <template slot="title" slot-scope="titleScope">
                {{titleScope.title.replace('高级','终极')}}
            </template>
            <span slot="eng">jingjing</span>
        </myButton>

        <myButton>
            <template slot="title" slot-scope="titleScope">
                蓝翔高级技师
            </template>
            夜蓝梦
        </myButton>


        <!-- 动态组件 -->
        <dynamicComponent/>

<br>
<br>
        <!-- 动画 -->
        <myTransition/>
    </div>
</template>
<script>
import todoList from './components/todoList.vue';
import myButton from './components/myButton.vue';
import dynamicComponent from './components/dynamicComponent.vue';
import myTransition from './components/transition.vue';
export default {
    components:{
        todoList,
        myButton,
        dynamicComponent,
        myTransition
    }
}
</script>
