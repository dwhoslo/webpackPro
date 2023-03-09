import { defineComponent } from "@vue/runtime-core";
import { ref ,reactive } from "vue";
import TopNav from "./page/TopNav";

export default defineComponent({
    name: "Home",
    components:{
        TopNav
    },
    setup(){

        return{
            
        }
    },
    template:`
        <TopNav />
    `,
})