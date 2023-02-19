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

