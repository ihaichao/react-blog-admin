/// <reference path="./src/typings/model/index.d.ts" />
/// <reference path="./src/typings/modules/index.d.ts" />
/// <reference path="./src/typings/store/index.d.ts" />

interface Window {
  particlesJS: any
}

interface IResponse<T> {
  code: number
  data: T
  message: string
}