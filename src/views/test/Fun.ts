import { defineComponent } from "@vue/runtime-core";
 import Global from "../../utils/Global/Global";
 import { ref ,reactive } from "vue";
 export default defineComponent ({
    name:'Second',
    setup(){
        const Str=ref('这是我的第二个子节点')
        interface tJsondata2 {
            [key:string]:string
        }
        const tJsondata2:tJsondata2 = {}
        tJsondata2.name = '这是我的第二个子节点'
        return{
            Str,
            Global
        }
    },
    
    template:` 
        <div id="Second" v-if="Global.Status.isLogin?true:false">{{Str}}{{Global.Status.isLogin}}</div>
    `
 })