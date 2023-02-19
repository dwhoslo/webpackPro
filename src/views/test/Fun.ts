import { defineComponent } from "@vue/runtime-core";
 
 export default defineComponent ({
    name:'Second',
    data:()=>{
        return{
            Str : '这是我的第二个子节点',
        }
    },
    created() {
        console.log(2)
    },
    template:` 
        <div id="Second">{{Str}}</div>
    `
 })