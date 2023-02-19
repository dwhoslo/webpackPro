import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive ,ref } from "vue";
import './index.less'
import Global from "../../../utils/Global";
import { MyFun } from "../../test/class";
// Vue3语法
let Login_html = `
    <div id="login" 
    class="login" 
    v-if="loginStatus?false:true"
    @click="Login"
    >登录</div>
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
            Global.Status.isLogin = true
            MyFun.Test.Fun()    // 这里调用了命名空间的中Test类的Fun方法 （直接调用，无需实例化）
            // let aa =new MyFun.Test()
            // console.log(aa)
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