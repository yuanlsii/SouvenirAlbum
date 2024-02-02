/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// 判断值是否为空
var isEmpty = function (obj) {
    const type = Object.prototype.toString.call(obj).slice(8,-1)
    switch (type) {
        case 'Object':
            if (obj == {}) {
                return true
            } else {
                return false
            }
        case 'Array':
            if (obj.length < 1) {
                return true
            } else {
                return false
            }

        default:
            break;
    }
};


var obj = {}
console.log(isEmpty(obj))
