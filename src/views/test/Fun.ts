import { defineComponent } from "@vue/runtime-core";
 import Global from "../../utils/Global/Global";
 import { ref ,reactive } from "vue";
 import { ElMessage } from "element-plus";
 import { newRegister , userInfoFile ,getUserInfo} from "../../utils/XHR/Controller/users"; 
 export default defineComponent ({
    name:'Second',
    setup(){
        const Str=ref('这是我的第二个子节点')
        interface tJsondata2 {
            [key:string]:any
        }
        const tJsondata2:tJsondata2 = {}
        const UserInfo = reactive({
            username:'oslo',
            age:38,
            desc:'我是练习代码时长两年半的js练习生',
            like:'music,game,code,rap,basketball,dance'
        })
        const fsUserinfo = reactive({
            username:'oslo',
            filename:'userinfo',
            data:UserInfo
        })
        const getuserinfo = reactive({
            foldername:'oslo',
            filename:'userinfo'
        })
        tJsondata2.name = '这是我的第二个子节点'
        const simulationRegister = async () => {
            let data = await newRegister('newRegister',UserInfo)
            console.log(data)
            Tips(data)
        }
        const simulationLogin = async () => {
            let data = await userInfoFile('userInfoFile',fsUserinfo)
            console.log(data)
            Tips(data)
        }
        const getUserInfoData = async () => {
            let data = await getUserInfo('getUserInfo',getuserinfo)
            console.log(JSON.parse(data.data))
            Tips(data)
        }
        const Tips = (data:tJsondata2) => {
            if(data.code === 0){
                ElMessage.success(data.msg)
            }else{
                ElMessage.error(data.msg || '更新失败')
            }
        }
        return{
            Str,
            Global,
            simulationRegister,
            simulationLogin,
            getUserInfoData,
            Tips,
            img:require('../../assest/11.jpg')
        }
    },
    
    template:` 
        <div id="Second" v-if="Global.Status.isLogin?true:false">{{Str}}{{Global.Status.isLogin}}</div>
        <div v-if="Global.Status.isLogin?true:false" @click="simulationRegister">发送注册请求</div>
        <div v-if="Global.Status.isLogin?true:false" @click="simulationLogin">发送写文件请求</div>
        <div v-if="Global.Status.isLogin?true:false" @click="getUserInfoData">获取用户信息</div>
        <img :src=img>
    `
 })