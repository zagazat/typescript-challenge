export type MyReturnType<Func extends (...args) => any> = Func extends (...args) => infer D ? D : any;
