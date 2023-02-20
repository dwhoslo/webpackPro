import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive ,ref } from "vue";
import './index.less'
import Global from "../../../utils/Global";
import { MyFun } from "../../test/class";
// Vue3语法
let Login_html = `
    <div class="loginContainer" v-if="!Global.Status.isLogin">
        <div class="loginBox">
            <h2>login</h2>
            <form action="">
                <div class="item">
                    <input type="text" v-model="state.username" required>
                    <label for="">userName</label>
                </div>
                <div class="item">
                    <input type="password" v-model="state.password" required>
                    <label for="">password</label>
                </div>
                <button class="btn" @click="Login">submit
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </form>
        </div>
    </div>
`  
export default defineComponent ({
    name:'Login',
    setup(){
        interface state {
            username:any,
            password:any
        }
        const loginStatus = ref(false)
        const state:state = reactive({
            username: '',
            password: ''
        })
        const Login = () => {
            if(state.username === '' || state.password === ''){
                return
            }else{
                loginStatus.value = !loginStatus.value
                Global.Status.isLogin = true
                MyFun.Test.Fun()    // 这里调用了命名空间的中Test类的Fun方法 （直接调用，无需实例化）
                // let aa =new MyFun.Test()
                // console.log(aa)
                window.localStorage.setItem('isLogin',true)
            }
            
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