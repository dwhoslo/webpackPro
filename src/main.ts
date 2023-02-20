import { createApp , onMounted} from 'vue'
import $ from 'jquery'
import './utils/Global.less'
import Hello from './views/test/index'
import Second from './views/test/Fun'
// import Test from './views/test/test'
import Login from './views/plugins/Login'
import Global from './utils/Global'
createApp({
    el: '#app',
    setup() {
        return{
            Global
        }
    },
    components:{
        Hello,
        Second,
        // Test,
        Login
    },
    template: `
            <Login/>
            <Hello/>
            <Second/>
            
    ` 
    
}).mount('#app')

export default $;