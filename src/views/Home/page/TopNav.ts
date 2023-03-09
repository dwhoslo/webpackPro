import { defineComponent } from "@vue/runtime-core";
import { ref ,reactive } from "vue";
import Global from "../../../utils/Global/Global";
import '../style/TopNav.less'

export default defineComponent({
    name: "TopNav",
    components:{

    },
    setup(){
        
        return{
            Global
        }
    },
    template:`
        <div class="Top-Nav" v-if="Global.Status.isLogin">
            <div>
            </div>
        </div>
    `,
})