// 文件路径 shims.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface Window {
  localStorage: any;
}

declare interface jsonDatas{
  [key:string]:any
}