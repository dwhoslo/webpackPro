import { reactive } from 'vue';
interface Status {
    isLogin: boolean
}
const Status = reactive( {
    isLogin: false,
})

export default {
    Status
}