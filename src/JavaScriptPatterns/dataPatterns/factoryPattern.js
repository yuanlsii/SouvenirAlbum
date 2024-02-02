// 工厂模式
/**
 * 简单工厂模式（Simple Factory）
 * 工厂方法模式（Factory Method）
 * 抽象工厂模式（Abstract Factory）
 */
// 创建一个简单工厂 
var SimpleFactory = function (param) {
    // 工厂内部接收一个参数，通过参数判断需要输入的值
    switch (param) {
        case 'A':
            return new A();
        case 'B':
            return new B();
        case 'C':
            return new C();
        default:
            break;
    }
}

var A = function () {
    this.body = 'A'
}

var B = function () {
    this.body = 'B'
}

var C = function () {
    this.body = 'C'
}

// 调用工厂
var data = SimpleFactory('A')


// 创建于一个工厂方法
// 将创建的示例推迟到子类中进行
class FactoryMethod {
    constructor(name = '', viewPage = []) {
        if (new.target === FactoryMethod) {
            throw new Error('抽象类不能实例化!');
        }
        this.name = name;
        this.viewPage = viewPage;
    }
}

class UserFactory extends FactoryMethod {
    constructor(name, viewPage) {
        // super代表父级的构造函数，但是this指向当前函数
        super(name, viewPage) // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
    }
    create(role) {
        switch (role) {
            case 'superAdmin':
                return new UserFactory('超级管理员', ['首页', '通讯录', '发现页', '应用数据', '权限管理']);
            case 'admin':
                return new UserFactory('管理员', ['首页', '通讯录', '发现页', '权限管理']);
            case 'user':
                return new UserFactory('普通用户', ['首页', '通讯录', '发现页']);
            default:
                throw new Error('参数错误, 可选参数:superAdmin、admin、user')
        }
    }
}

let userFactory = new UserFactory();
let superAdmin = userFactory.create('superAdmin');
let admin = userFactory.create('admin');
let user = userFactory.create('user');


// 创建于一个抽象工厂
class AbstractFactory {
    constructor(type) {
      if (new.target === AbstractFactory) {
        throw new Error('抽象类不能实例化!')
      }
      this.type = type;
    }
  }
   
  class UserOfWechat extends AbstractFactory {
    constructor(name) {
      super('superAdmin');
      this.name = name;
      this.viewPage = ['首页', '通讯录', '发现页']
    }
  }
   
  class UserOfQq extends AbstractFactory {
    constructor(name) {
      super('admin');
      this.name = name;
      this.viewPage = ['首页', '通讯录', '发现页']
    }
  }
   
  class UserOfWeibo extends AbstractFactory {
    constructor(name) {
      super('user');
      this.name = name;
      this.viewPage = ['首页', '通讯录', '发现页']
    }
  }
   
  function getAbstractUserFactory(type) {
    switch (type) {
      case 'superAdmin':
        return UserOfWechat;
      case 'admin':
        return UserOfQq;
      case 'user':
        return UserOfWeibo;
      default:
        throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
  }
   
  let WechatUserClass = getAbstractUserFactory('superAdmin');
  let QqUserClass = getAbstractUserFactory('admin');
  let WeiboUserClass = getAbstractUserFactory('user');
   
  let wechatUser = new WechatUserClass('微信小李');
  let qqUser = new QqUserClass('QQ小李');
  let weiboUser = new WeiboUserClass('微博小李');
