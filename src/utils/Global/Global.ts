import { reactive } from 'vue';
interface Status {
    isLogin: boolean | Window
}
const Status:Status = reactive( {
    isLogin: false || window.localStorage.getItem('isLogin'),
})

interface o_Request{
    BASE_URL:string,
}
const o_Request:o_Request = reactive({
    BASE_URL: 'http://43.142.180.157:3000/'
    // BASE_URL: 'http://localhost:3000/'
})

export default  {
    Status,
    o_Request
}