import { reactive } from 'vue';
interface Status {
    isLogin: boolean | Window
}
const Status = reactive( {
    isLogin: false || window.localStorage.getItem('isLogin'),
})

export default {
    Status
}