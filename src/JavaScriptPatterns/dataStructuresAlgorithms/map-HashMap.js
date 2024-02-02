// 字典
function Dictionary() {
    var items = {};
    this.has = function (key) {
        // hasOwnProperty 判断items是否存在属性key，存在返回true
        return items.hasOwnProperty(key);
    };
    this.set = function (key, value) {
        if (this.has(key)) return false; //确保唯一性
        items[key] = value;
        return true
    };
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        } else {
            return false
        }
    };
    function get(key) {
        return this.has(key) ? items[key] : undefined;
    }
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
}

hasData = new Dictionary()


// 散列表
function HashTable() {
    var table = [];
    var loseloseHashCode = function (key) {
        var hash = 5381; // 初始哈希值
        for (var i = 0; i < key.length; i++) {
            hash = (hash * 33) ^ key.charCodeAt(i);
        }
        return hash >>> 0; // 确保哈希值为正整数
    };
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };
}

getData = new HashTable()

getData.put("aaa", 345)
getData.put("aaa", 234)
getData.put("bbb", 123)

console.log(getData.get("bbb"))