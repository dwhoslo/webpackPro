import { defineComponent } from "@vue/runtime-core";
import { createApp ,reactive  } from "vue";
// Vue3语法

export default defineComponent ({
    name:'Hello',
    setup(){
        const state = reactive({
            name: 'tom'
        })
        return{
            state
        }
    },
    template:` 
        <div id="First">{{state.name}}</div>
    `,
    methods:{
        
    }
})
