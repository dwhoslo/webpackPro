// Vue2语法

 export default defineComponent ({
 name:'Hello',
 data:()=>{
     return{
         Str : 'Hello World',
     }
 },
 template:` 
     <div id="First">{{Str}}</div>
 `
 })

// Vue3语法  (推荐使用)

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
    `
})