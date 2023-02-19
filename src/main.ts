import { createApp , onMounted} from 'vue'
import $ from 'jquery'
import './utils/Global.less'
import Hello from './views/test/index'
import Second from './views/test/Fun'
import Test from './views/test/test'
createApp({
    el: '#app',
    setup() {
        onMounted(() => {
            if(true){
                // Test.mount('Test')
            }
        })
    },
    components:{
        Hello,
        Second,
        Test
    },
    template: `
            <Hello/>
            <Second/>
            <Test/>
    ` 
    
}).mount('#app')

export default $;