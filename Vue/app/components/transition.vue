<template>
    <div>
        <button @click="isShow=!isShow">显示隐藏</button>
        <!-- <p>
            <transition name="slide">
                <img src="../img/g3.jpg" v-show="isShow"/>
            </transition>
        </p> -->

        <p>
            <transition-group
            enter-active-class="bounceIn"
            leave-active-class="bounceOut"
            >
                <img src="../img/jingjing.png" v-show="isShow" key="1"/>
                <img src="../img/g5.jpg" v-show="isShow" key="2"/>
            </transition-group>
        </p>

         <transition
            :css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"
        >
                <img src="../img/lemon.jpg" v-show="isShow"/>
        </transition>
    </div>
</template>
<script>
import 'animate.css';
/**
    transition/transition-group属性：

    enter-class         -> v-enter
    enter-active-class  -> v-enter-active
    enter-to-class      -> v-enter-to
    leave-class
    leave-active-class
    leave-to-class


    // js动画：
    原理：节点操作
 */
export default {
    data(){
        return {
            isShow:true
        }
    },
     methods: {
      // 过渡进入
      // 设置过渡进入之前的组件状态
      beforeEnter: function (el) {
        // ...
        console.log('beforeEnter')
      },
      // 设置过渡进入完成时的组件状态
      enter: function (el, done) {
        // ...
        //done()

        console.log('enter')
        // Velocity(el, { opacity: 0.5 });
      },
      // 设置过渡进入完成之后的组件状态
      afterEnter: function (el) {
        // ...
        console.log('afterEnter')
      },
      enterCancelled: function (el) {
        // ...
        console.log('enterCancelled')
      },
      // 过渡离开
      // 设置过渡离开之前的组件状态
      beforeLeave: function (el) {
        // ...
        console.log('beforeLeave')
      },
      // 设置过渡离开完成时地组件状态
      leave: function (el, done) {
        // ...
        // done()
        console.log('leave')
      },
      // 设置过渡离开完成之后的组件状态
      afterLeave: function (el) {
        // ...
        console.log('afterLeave')
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled: function (el) {
        // ...
        console.log('leaveCancelled')
      }
    }
}
</script>
<style scoped lang="scss">
img{position:relative;width:100px}
// //进入状态
//     .v-enter{opacity:0}
//     .v-enter-to{opacity: 1;}
//     .v-enter-active{transition:opacity 5s;}
// // 离开状态
//     .v-leave{opacity: 1;} //初始状态
//     .v-leave-to{opacity:0}
//     .v-leave-active{transition:opacity 5s;}

// 自定义动画
//进入状态
    .slide-enter{left:-320px;}
    .slide-enter-to{left: 0;}
    .slide-enter-active{transition:all 2s;}
// 离开状态
    .slide-leave{left: 0;} //初始状态
    .slide-leave-to{left:-320px}
    .slide-leave-active{transition:all 2s;}
</style>
