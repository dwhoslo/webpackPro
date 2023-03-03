import request from "./request"

interface  o_Request{
    get(url:string,Data?:any):void,
    post(url:string,Data?:any):void,
}

class o_Request{
    get(url:string,Data?:any){
        const config = {
            type:'get',
            data:Data,
            async:false
        }
        return request(url,config)
    }
    post(url:string,Data?:any){ 
        const config = {
            type:'post',
            data:Data,
            async:false
        }
        return request(url,config)
    }
}

export default {
    o_Request
}