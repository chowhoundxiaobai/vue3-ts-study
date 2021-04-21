<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>欢迎光临VUE3</h2>
    <div>开心就完事了</div>
    <!-- <div>
      <button v-for="(item, index) in girls" :key="index" @click="seleteFun(index)">
        {{ index }}:{{ item }}
      </button>
    </div>
    <div>你点击了【{{seleteGirl}}】</div> -->


    <!-- reactive 形式 -->
    <!-- <div>
      <button v-for="(item, index) in data.girls" :key="index" @click="data.seleteFun(index)">
        {{ index }}:{{ item }}
      </button>
    </div>
    <div>你点击了【{{data.seleteGirl}}】</div> -->


    <!-- reactive 形式 -->
    <div>
      <button v-for="(item, index) in girls" :key="index" @click="seleteFun(index)">
        {{ index }}:{{ item }}
      </button>
    </div>
    <div>你点击了【{{seleteGirl}}】</div>
    <div>
      <button @click="overActive">选择完毕</button>
    </div>
    <p>{{overText}}</p>
    
    <div>
      <button @click="getNowTime">显示当前时间</button>
      <p>{{nowTime}}</p>
    </div>
    <div>
      <button @click="clickGetImg">随机获取图片</button>
    </div>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref} from "vue";

// export default defineComponent({
//   name: "App",
//   setup() {
//     const girls = ref(["hong", "fang", "ming"]);
//     const seleteGirl = ref("");
//     const seleteFun = (index: number) => {
//       seleteGirl.value = girls.value[index];//因为用了ref,所以要用.value
//     };
//     return {
//       girls,
//       seleteGirl,
//       seleteFun,
//     };
//   },
// });



// //reactive 形式
// import {reactive} from "vue";//reactive 形式

// interface DataProps {
//   girls: string[];
//   seleteGirl: string;
//   seleteFun: (index: number) => void ;

// }


// export default ({//不需要defineComponent
//   name: "App",
//   setup() {
//     const data : DataProps = reactive({
//       girls: ["hong", "fang", "ming"],
//       seleteGirl: '',
//       seleteFun: (index: number) => {
//       data.seleteGirl = data.girls[index];//因为用了ref,所以要用.value
//     }
//     })
//     return {
//       data
//     };
//   },
// });

//reactive 形式
// import {onBeforeMount, onBeforeUpdate, onUpdated, onMounted, reactive, toRefs} from "vue";//reactive 形式
// import {reactive, toRefs, onRenderTracked} from "vue";//reactive 形式
// import {reactive, toRefs, onRenderTriggered} from "vue";//reactive 形式
import {reactive, toRefs, ref, watch} from "vue";//reactive 形式

import {nowTime, getNowTime} from './tool/util';

import {getImg} from './serve/imgRequest'

interface DataProps {
  girls: string[];
  seleteGirl: string;
  seleteFun: (index: number) => void ;

}


export default ({//不需要defineComponent
  name: "App",
  
  setup() {
    // console.log("1-开始创建组件之前----setup()");
    const data : DataProps = reactive({
      girls: ["cli", "vuex", "data"],
      seleteGirl: '',
      seleteFun: (index: number) => {
      data.seleteGirl = data.girls[index];//因为用了ref,所以要用.value
      },

      
    })
    const overText = ref('Vue3');
    const overActive = ()=> {
      overText.value = '选择完毕|' + overText.value;
      // document.title = overText.value;
    };

    // Vue3 
    watch([overText, ()=>data.seleteGirl], (newVal, oldVal)=>{

      document.title = newVal["0"];
      console.log(`new--->${newVal["0"]}`);
      // console.log(newVal);
      console.log(`old--->${oldVal}`);
    })

    const refData = toRefs(data);

    // 请求模块化
    const randonImg = ref('')
    const clickGetImg = ()=>{ 
      getImg("https://dog.ceo/api/breeds/image/random").then(res => {
        console.log(res,"11111");
        randonImg.value = res.message;
      })
    }


    //vue3生命周期
    // onBeforeMount(() => {
    //   console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    // });

    // onMounted(()=> {
    //   console.log("3-组件挂载完成后执行的函数----onMounted()");
    // })
    // onBeforeUpdate(()=> {
    //   console.log("4-组件更新之前执行的函数----onBeforeUpdate()");
    // })
    // onUpdated(()=> {
    //   console.log("5-组件更新时执行的函数----onUpdated()");
    // })
    

    //Vue3新增 onRenderTracked  onRenderTriggered
    // onRenderTracked((event)=> {
    //   console.log(event,"---onRenderTracked状态跟踪----");
    // })
    // onRenderTriggered((event)=>{
    //   console.log(event,"---onRenderTriggered状态触发----");
    // })

    return {
      ...refData,
      overText,
      overActive,
      nowTime, 
      getNowTime,
      clickGetImg
    };
  },
  


  // vue2的生命周期
  // beforeCreate() {
  //   console.log("1-组件创建之前-----beforeCreate()");
  // },
  // beforeMount() {
  //   console.log("2-组件挂载到页面之前执行-----BeforeMount()");
  // },
  // mounted() {
  //   console.log("3-组件挂载到页面之后执行-----Mounted()");
  // },
  // beforeUpdate() {
  //   console.log("4-组件更新之前-----BeforeUpdate()");
  // },
  // updated() {
  //   console.log("5-组件更新之后-----Updated()");
  // },
});
// Vue3 钩子函数
/* 
  steup()
  beforeCreate()
  created()
  onBeforeMount()
  onUnmounted()
  onActivated()
  onDeactivated()
  onErrorCaptured()
*/

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
