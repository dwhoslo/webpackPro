import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive ,ref } from "vue";
import Global from "../../utils/Global/Global";
import { ElInput } from "element-plus";
import Test from "./test";
// Vue3语法

export default defineComponent ({
    name:'Hello',
    components:{
        ElInput,
        Test
    },
    setup(){
        const state = reactive({
            name: 'tom'
        })
        
        return{
            state,
            Global,
            input : ref('')
        }
    },
    template:` 
        <div id="First" v-if="Global.Status.isLogin?true:false">
        
        {{state.name}}
        <el-input v-model="input"></el-input>
        <Test/>
        </div>
    `
})
