// 单例模式
// 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
let timeTool = {
    name: '处理时间工具库',
    getISODate: function () { },
    getUTCDate: function () { }
}

// export default new myclass()

export default class myclass {
    data = function() {
        return {
            a: 'A',
            b: 'B'
        }
    }
}