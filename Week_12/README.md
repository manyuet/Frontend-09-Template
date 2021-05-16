学习笔记
# CSS排版
## 盒
Tag-标签（源代码）：Html代码中写到的是标签
Element-元素（语义）：DOM树中存储的是节点（node），元素是节点（node）的一种
Box-盒（表现）：排版和渲染的基本单位是盒
### 盒模型
padding：影响盒内的排版，决定可排布的content区域的大小
margin：影响盒本身的排版，决定盒周围可存在的空白区域的大小
box-sizing：
- content-box：所设置的width属性只包含content内容，此时盒所排版占用的区块是content-box的尺寸加上padding，border，再加margin
- border-box
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqgfi8wmajj31i80qitky.jpg)

## 正常流
css排版技术（三代）
- 第一代是基于正常流
- 第二代是基于flex
- 第三代是基于grid  

css排版里只排两样东西，盒，文字；一切的css都是这两样之一；
排版就是给每个字安排到的位置，给每个盒安排到 正确的位置；
正确位置：在不考虑盒模型的情况下，一般就是一个位置一个尺寸
正常流：与平时书写的习惯是一致的

### 正常流排版
- 收集盒和文字进行（hang）：（flex排版中是没有文字的，文字是装进盒里面的）
- 计算盒和文字在行中的排布
- 计算行的排布

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqggccqpzlj31as0le78h.jpg)
IFC：行内级格式化上下文--从左往右排布的上下文
BFC：块级格式化上下文--从上往下排布的上下文

## 正常流的行级排布
正常流排布：
- 块级的排布
- 行级的排布

### 行级排布
- base-line：基线
- text-top：文字顶缘
- text-bottom：文字底缘
- line-top：
- line-bottom：
盒的先后顺序和盒的尺寸都会影响line-top，line-bottom的位置，盒不会影响text-top，text-bottom
行内盒的基线是随着里面的文字变化的，大部分情况不建议行内盒使用基线对齐

行模型
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqh658ibqhj31hg0o6wn8.jpg)

### 正常流的块级排布

正常流的两个机制
- float：浮动元素已经脱离了正常流，依附于正常流去定义的排布方式
- clear
float基本规则：
- 可视为先把元素排到页面的某个特定的位置当是正常流里面的元素，如果有float，就朝着float方向去挤，那么原来已经排好的文字的位置就会发生改变，根据float元素占据的区域去调整行盒的位置；
- 当一个float元素出现以后，它不止影响自己所在的这一行，凡是他的高度所占据的范围内，所有的行盒都会根据这个float的元素的尺寸调整自己的大小
- float元素会相互影响（float的堆叠现象）
- clear：找一个干净的空间执行float
  - clear：right；我们需要找到右边这样一块干净的空间来执行浮动的操作
- float不认强制换行（<br>），可以在需换行的位置加上clear


margin折叠(margin collapse，留白的折叠现象，边距折叠)
在BFC中元素是顺次从上往下排，在排的时候还是会受到盒模型的影响
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj1t7iktgj311c0m6tax.jpg)
**Margin Collapse 只会发生在BFC里面**

## BFC合并（Block Formatting Context）块级格式化上下文

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj21vnwlbj30xe0fqgxf.jpg)
Block Container
- block
- inline-block
- table-cell
- flex item
- grid cell
- table-caption

![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj25x92rmj316e0l0gx9.jpg)


## flex排版
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj2gkw5m6j30le0d0ago.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj2hgc94kj31h80im7da.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj2in6jcfj31i60j2qf7.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj2jabtmoj31go0ii48q.jpg)

## 动画

### Animation
- @keyframes定义
- animation：使用
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqj2lzltsnj30fg0g0ae9.jpg)

- animation-name:动画曲线
- animation-duration:动画的时长
- animation-time-function:动画的时间曲线
- animation-delay:动画开始前的延迟
- animation-iteration-count:动画的播放次数
- animation-direction:动画的方向


## 颜色
   