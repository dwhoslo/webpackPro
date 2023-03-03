<h1>项目运行</h1>
1、安装
npm install
2、运行
npm run start 
3、打包
npm run build 

|
|——————>src
        |
        |————>main.ts                       //入口文件
        |
        |————>index.html                    //html渲染模板文件
        |
        |————>assest                        //静态资源文件
        |
        |————>utils                         //控制层，资源管理文件
        |        |
        |        |————>Global               //全局字段配置文件
        |        |
        |        |————>Style                //全局样式配置文件
        |        |
        |        |————>XHR                  //全局接口交互配置文件
        |               |
        |               |————>Controller    //  全局数据交互控制层
        |               |
        |               |————>Model         //全局数据交互数据层
        |
        |
        |————>views
        |        |
        |        |————>plugins
        |        |
        |        |————>test
        |
|——————>webpack.config.js
|
|——————>shimd.d.ts


Vue2语法

 export default defineComponent ({
 name:'Hello',
 data:()=>{
     return{
         Str : 'Hello World',
     }
 },
 template:` 
     <div id="First">{{Str}}</div>
 `
 })

Vue3语法  (推荐使用)

export default defineComponent ({
    name:'Hello',
    setup(){
        const state = reactive({
            name: 'tom'
        })

        return{
            state
        }
    },
    template:` 
        <div id="First">{{state.name}}</div>
    `
})



export class Test {
    public static Str:string = "这是我的命名空间";
    public constructor() {
    }
    public static Fun():void {
        console.log(this.Str);
    }
}

对于上述的静态成员变量和函数，只可在内部进行访问，外部申明无法直接访问
静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数。
45行这句话的意思就是，若调用里面的Fun（）方法，可以直接通过Test.Fun()进行调用，无需进行实例化（比如let Exa = new Test();Exa.Fun()）
注意：若上述的Fun函数前面的public改为private,则外部无法访问该函数，只能在该类内部进行访问

构造器的私有和公共决定了能否可以直接访问类中的方法而不需要实例化,而类中的属性的私有和公有决定了外部能否调用


图片文件的引入：
需要使用require（）语法，例如：test:require('../../assest/11.jpg')
