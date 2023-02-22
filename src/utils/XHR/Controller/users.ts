import http from '../Model/http'
let Http = new http.o_Request()
export function UserLogin (url:any,Data:any) {
    return Http.post(url,Data)
}
