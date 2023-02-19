import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive  } from "vue";
// Vue3语法

export default defineComponent ({
    name:'Test',
    setup(){
        const state = reactive({
            name: 'Test'
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

// let Test = createApp({
//     setup() {
//         const state = reactive({
//             name: '这是我的测试文件'
//         })
//         return{
//             state
//         }
//     },
//     template:` 
//         <div id="First">{{state.name}}</div>
//         `
// })

// export = Test;
