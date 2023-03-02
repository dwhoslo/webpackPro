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
        const UserInfo = reactive({
            name:'alies',
            age:25
        })
        tJsondata2.name = '这是我的第二个子节点'
        const simulationRegister = () => {
            $.ajax({
                url: 'http://localhost:3000/newRegister',
                type: 'post',
                data: UserInfo,
                success: function (data) {
                    console.log(data)
                },
                error: function (err) {
                    console.log(err)
                }
            })
        }
        
        return{
            Str,
            Global,
            simulationRegister
        }
    },
    
    template:` 
        <div id="Second" v-if="Global.Status.isLogin?true:false">{{Str}}{{Global.Status.isLogin}}</div>
        <div @click="simulationRegister">发送请求</div>
    `
 })