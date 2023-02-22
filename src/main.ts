import { createApp , onMounted} from 'vue'
import $ from 'jquery'
import 'element-plus/dist/index.css'
import './utils/Style/Global.less'
import Hello from './views/test/index'
import Second from './views/test/Fun'
import Login from './views/plugins/Login'
createApp({
    el: '#app',
    setup() {
        return{

        }
    },
    components:{
        Hello,
        Second,
        Login
    },
    template: `
            <Login/>
            <Hello/>
            <Second/>` 
    
}).mount('#app')

export default $;