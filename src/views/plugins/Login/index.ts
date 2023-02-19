import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive ,ref } from "vue";
import './index.less'
import Global from "../../../utils/Global";
// Vue3语法
let Login_html = `
    <div id="login" 
    class="login" 
    v-if="loginStatus?false:true"
    @click="Login"
    >登录{{state.username}}</div>
`  
export default defineComponent ({
    name:'Login',
    setup(){
        const loginStatus = ref(false)
        const state = reactive({
            username: 'oslo',
            password: '123456'
        })
        const Login = () => {
            loginStatus.value = !loginStatus.value
            console.log(Global)
            Global.Status.isLogin = true
        }
        return{
            loginStatus,
            state,
            Global,
            Login
        }
    },
    template:Login_html
})