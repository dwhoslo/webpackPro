export namespace MyFun  {
    export class Test {
        public static Str:string = "这是我的命名空间";
        public constructor() {
        }
        public static Fun():void {
            console.log(this.Str);
        }
        
    }
}
// export namespace MyFun  {
//     export class Test {
//         Str:string = "这是我的命名空间";
//         constructor() {
//         }
//         private Fun():void {
//             console.log(this.Str);
//         }
        
//     }
// }
interface tJsondata {
    [key:string]:any
}
class MyTest {
    public jsonData:tJsondata = {
        name: 'oslo',
    }
    public constructor() {}
    public Fun():void {
        this.jsonData.age = 18
        console.log(this.jsonData.name);
    }
}
