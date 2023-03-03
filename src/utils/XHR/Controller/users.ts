import http from '../Model/http'
let Http = new http.o_Request()
export function UserLogin (url:any,Data:any) {
    return Http.post(url,Data)
}
export function UserRegister (url:any,Data:any) {
    return Http.post(url,Data)
}
export function newRegister (url:any,Data:any) {
    return Http.post(url,Data)
}
export function userInfoFile (url:any,Data:any) {
    return Http.post(url,Data)
}
export function getUserInfo (url:any,Data:any) {
    return Http.get(url,Data)
}