import { defineComponent } from "@vue/runtime-core";
 import Global from "../../utils/Global/Global";
 import { ref } from "vue";
 export default defineComponent ({
    name:'Second',
    setup(){
        const Str=ref('这是我的第二个子节点')
        return{
            Str,
            Global
        }
    },
    
    template:` 
        <div id="Second" v-if="Global.Status.isLogin?true:false">{{Str}}{{Global.Status.isLogin}}</div>
    `
 })