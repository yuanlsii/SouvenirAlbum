// 代理模式
// const image = (function () {
//     const imgNode = document.createElement('img');

//     document.body.appendChild(imgNode);

//     return {
//         setSrc: function (src) {
//             imgNode.src = src;
//         },
//     };
// })();

// // 代理容器
// const proxyImage = (function () {
//     let img = new Image();

//     // 加载完之后将设置为添加的图片
//     img.onload = function () {
//         image.setSrc(this.src);
//     };

//     return {
//         setSrc: function (src) {
//             image.setSrc('loading.gif');
//             img.src = src;
//         },
//     };
// })();

// proxyImage.setSrc('file.jpg');


// 求乘积函数（专注于自身职责，计算成绩）
const mult = function () {
    let result = 1;
    for (let i = 0, l = arguments.length; i < l; i++) {
        result = result * arguments[i];
    }
    return result;
};

// proxyMult 缓存由代理实现
const proxyMult = (function () {
    let cache = {};
    return function () {
        let args = Array.prototype.join.call(arguments, ',');
        console.log(args," args")
        console.log(arguments, "arguments")
        // 判断值是否存在，如果存在则返回当前参数
        if (args in cache) {
            return cache[args];
        }

        return (cache[args] = mult.apply(this, arguments));
    };
})();

console.log(proxyMult(1, 2, 3))
proxyMult(1, 2, 3); // 6
proxyMult(1, 2, 3); // 6