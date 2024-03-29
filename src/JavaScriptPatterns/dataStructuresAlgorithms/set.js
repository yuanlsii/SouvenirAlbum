// 集合

function Set() {
    var items = {};
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };
    this.add = function (value) {
        if (this.has(value)) return false; //确保唯一性
        items[value] = value;
        return true
    };
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        } else {
            return false
        }
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        return Object.keys(items).length;
    };
    this.values = function () {
        return Object.keys(items);
    };
    this.union = function (otherSet) {//并集
        var unionSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    this.intersection = function (otherSet) {//交集
        var intersectionSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    this.difference = function (otherSet) { //差集
        var differenceSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    this.subset = function (otherSet) { //子集
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    };
}