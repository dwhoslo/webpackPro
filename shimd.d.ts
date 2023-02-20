// 文件路径 shims.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
   
  // 对vue进行类型补充说明
//   declare module '@vue/runtime-core' {
//     interface ComponentCustomProperties {
//       $Api: any // 这里可以用$Api具体的类型代替any
//     }
//   }