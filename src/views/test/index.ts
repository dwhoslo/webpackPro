import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive  } from "vue";
import Global from "../../utils/Global/Global";
// Vue3语法

export default defineComponent ({
    name:'Hello',
    setup(){
        const state = reactive({
            name: 'tom'
        })
        return{
            state,
            Global
        }
    },
    template:` 
        <div id="First" v-if="Global.Status.isLogin?true:false">{{state.name}}</div>
    `
})
