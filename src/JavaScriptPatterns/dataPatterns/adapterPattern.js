// 适配器模式
class Adapter {
    test() {
        return '旧接口';
    }
}

class Target {
    constructor() {
        this.adapter = new Adapter();
    }
    test() {
        let info = this.adapter.test();
        return `适配${info}`;
    }
}

const target = new Target();
// '适配旧借口'
console.log(target.test());