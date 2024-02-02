// 发布-订阅模式
// 发布-订阅模式有中央事件总线控制
// 发布者
function DataHub() { }

DataHub.prototype.notify = function (url, callback) {
    callback(url);
}

function DownloadManager() {
    this.events = {};
    this.uId = 0;
}

DownloadManager.prototype.publish = function (eventType, url) {
    if (!this.events[eventType]) {
        return false;
    }
    var subscribers = this.events[eventType],
        count = subscribers ? subscribers.length : 0;
    while (count--) {
        var subscriber = subscribers[count];
        subscriber.handler(eventType, subscriber.taskId, url);
    }
}

DownloadManager.prototype.subscribe = function (eventType, handler) {
    if (!this.events[eventType]) {
        this.events[eventType] = [];
    }
    var taskId = (++this.uId).toString();
    this.events[eventType].push({
        taskId: taskId,
        handler: handler
    });

    return taskId;
}

var dataHub = new DataHub();

var downloadManager = new DownloadManager();

// 下载器
var dataLoader = function (eventType, taskId, url) {
    console.log('Task ' + taskId + ' load data from ' + url);
}

var downloadTask1 = downloadManager.subscribe('dataReady', dataLoader);

dataHub.notify('http://somedomain.someaddress', function (url) {
    downloadManager.publish('dataReady', url);
});