import $ from 'jquery';
import Global from '../../Global/Global'
interface IOptions {
    type: string,
    data: any,
    async: boolean
}
export default function request(url: string, options: IOptions): Promise<any>  {
    return new Promise((resolve, reject) => {
        $.ajax({
            url:Global.o_Request.BASE_URL + url,
            type: options.type,
            data: options.data,
            async: options.async,
            success: (res: any) => {
                resolve(res);
            },
            error: (err: any) => {
                reject(err);
            }
        })
    }) 
}
