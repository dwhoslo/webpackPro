import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive  } from "vue";
// Vue3语法

export default defineComponent ({
    name:'Test',
    setup(){
        const state = reactive({
            name: '这个是内嵌的div组件，属于子节点'
        })
        console.log(3)
        return{
            state
        }
    },
    template:` 
        <div id="First">{{state.name}}</div>
    `
})