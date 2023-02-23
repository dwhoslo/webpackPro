import { defineComponent } from "@vue/runtime-core";
import { Back } from "@element-plus/icons-vue";

let Register_html = ` 
    <div class="RegisterPanel">
        <div class="toLoginPanel" @click="toLoginPanel">
            <Back /><p>返回登录</p>
        </div>
    </div>
`
export default defineComponent ({
    name:'Register',
    components:{
        Back
    },
    setup(){
        const toLoginPanel = () => {
            $('.RegisterPanel').animate({
                "left":400
            },200)
        }
        return{
            toLoginPanel
        }
    },
    template:Register_html
})