import { defineComponent } from "@vue/runtime-core";
import { reactive } from "@vue/runtime-core";
import { Back } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { UserRegister } from "../../../utils/XHR/Controller/users";

let Register_html = ` 
    <div class="RegisterPanel">
        <div class="toLoginPanel" @click="toLoginPanel">
            <Back /><p>返回登录</p>
        </div>
        <div class="RegisterForm">
            <h2>Register</h2>
            <form>
                <div class="item">
                    <input type="text" v-model="registerForm.username" required>
                    <label for="">用户名</label>
                </div>
                <div class="item">
                    <input type="password" v-model="registerForm.pass" required>
                    <label for="">密码</label>
                </div>
                <div class="item">
                    <input type="password" v-model="registerForm.checkPass" required>
                    <label for="">确认密码</label>
                </div>
                <div class="item">
                    <input type="text" v-model="registerForm.age" required>
                    <label for="">年龄</label>
                </div>
                <button class="btn" type="button" @click="register">注册
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
    name:'Register',
    components:{
        Back,
    },
    setup(){
        const registerForm = reactive({
            username:'',
            pass:'',
            checkPass:'',
            age:''
        })
        const toLoginPanel = () => {
            $('.RegisterPanel').animate({
                "left":400
            },200)
        }
        const register = async() => {
            if(registerForm.username === '' || registerForm.pass === '' || registerForm.checkPass === '' || registerForm.age === ''){
                ElMessage.error('输入字段不能为空')
                return
            }else if(registerForm.pass !== registerForm.checkPass){
                ElMessage.error('两次密码不一致')
                return
            }else{
                let res:any = await UserRegister('register',registerForm)
                if(res.code === '200'){
                    ElMessage.success(res.msg)
                    registerForm.username = ''
                    registerForm.pass = ''
                    registerForm.checkPass = ''
                    registerForm.age = ''
                    toLoginPanel()
                }else{
                    ElMessage.error(res.msg || '注册失败')
                }
            }
        }
        return{
            registerForm,
            toLoginPanel,
            register
        }
    },
    template:Register_html
})