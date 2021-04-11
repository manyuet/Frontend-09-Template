学习笔记
## JavaScript表达式|运算符和表达式
### 语法树，运算符优先级
- 构造语法树时注意，乘除会优先形成更小一级的语法结构，加减形成更高一级的语法结构
- JavaScript语法中，使用产生式描述运算符的优先级
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpbix3k33cj30tq0k2dno.jpg)
- a.b访问的是b熟悉，但是从属性取出来的不是属性值，而是引用
- 引用类型存在于JavaScript，被称为标准中的类型
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpbjcenxvsj30sq0hi43v.jpg)
  - 优先级低于new，也低于前面所有的member预算
  -  eg: new a()['b']: new出来a对象，访问b属性；因为带（）是member expression，优先级高于call expression
- left hand的expression放到等式左边
- 逻辑运算基本优先级最低
### 运算符左右值区别

### 类型转换
- a + b
  - 一定要作用于字符串或者是两个数字之间，用于别的数据类型就会发生类型转换
  - 一个字符串或者一个数字相加，就要把数字转成字符串
  - 如其中一个类型为布尔类型，根据相加关系进行类型转换
- 最复杂的类型转换为“==”
  - “false” == false：“false”（字符串）与false（布尔类型）并不相等，“==”转为同类型再进行比较
  - 尽量使用“===”，或者做完类型转换再进行比较

- JavaScript类型转换
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpel6dow2xj31ik0rm7l7.jpg)
  - Undefined转成Number会得到NaN
  - Null与Undefined不同，两个不能转为Object
- 拆箱转换（指将Object转成基本类型）
  - 最主要过程`toPrimitive`
    ```javascript
    var o = {
      toString(){return "2"},
      valueOf(){return 1},
      [Symbol.toPrimitive](){return 3} 
    }
    console.log("x" + o);
    // 只要有Symbol.toPrimitive，结果一定是x3
    // 如果注释掉Symbol.toPrimitive，结果则是x1
    // toString，valueOf，Symbol.toPrimitive以上三个方法的定义均会影响toPrimitive
    ```
    - 如果定义了Symbol.toPrimitive，则会忽略toString，valueOf
    - 加法会优先调用valueOf
      ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpelnnf4s5j30j20lqju4.jpg)
    ```javascript
    var o = {
      toString(){return "2"},
      valueOf(){return 1},
      [Symbol.toPrimitive](){return 3} 
    }
    var x = {};
    x[o] = 1
    console.log(x)
    ```
    - 如果定义了Symbol.toPrimitive，则会忽略toString，valueOf
    - o作为属性名，则会优先调用`toString`方法
      ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpelz03psfj30iq0gy768.jpg)

  - 装箱转换
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpem1aw6dyj31b20keqbg.jpg)
    - Symbol无法被new调用
### 运行时相关概念
- completion record
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpf1d2ykdgj31840cuthm.jpg)
- 简单语句
- 复合语句
- 
### 引用类型(标准中的类型)
