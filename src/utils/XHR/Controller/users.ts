import http from '../Model/http'
let Http = new http.o_Request()
export function UserLogin (url:string,Data:any) {
    return Http.post(url,Data)
}
