import { ElMessage } from 'element-plus';
import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive ,ref } from "vue";
import './index.less'
import Global from "../../../utils/Global/Global";
import { UserLogin } from "../../../utils/XHR/Controller/users";// Vue3语法
let Login_html = `
    <div class="loginContainer" v-if="!Global.Status.isLogin">
        <div class="loginBox">
            <h2>login</h2>
            <form>
                <div class="item">
                    <input type="text" v-model="state.username" required>
                    <label for="">userName</label>
                </div>
                <div class="item">
                    <input type="password" v-model="state.password" required>
                    <label for="">password</label>
                </div>
                <button class="btn" type="button" @click="Login">登录
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
        const state:state = reactive({
            username: '',
            password: ''
        })
        const Login = async() => {
            if(state.username === '' || state.password === ''){
                ElMessage.error('输入字段不能为空')
                return
            }else{
                let res:any = await UserLogin('login',state)
                if(res.code === '200'){
                    window.localStorage.setItem('isLogin',true)
                    window.localStorage.setItem('username',state.username)
                    window.localStorage.setItem('password',state.password)
                    Global.Status.isLogin = true
                    ElMessage.success('登录成功')
                }else{
                    state.username = ''
                    state.password = ''
                    ElMessage.error(res.msg || '登录失败')
                }
            }
            
        }
        return{
            state,
            Global,
            Login
        }
    },
    template:Login_html
})