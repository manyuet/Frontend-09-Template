学习笔记
## css总论
css总体结构
- @charset
- @import
- rules
  - @media
  - @page
  - rule

## CSS @规则的研究
At-rules
- @charset：主要作用，声明css的字符集
- @counter-style：写列表时前面的小黑点或者小数字
- @keyframes：定义动画用的东西
- @fontface： 定义一切字体


## css规则的结构
css规则
- 选择器
  - ，（逗号）优先级最低，结合性排在最后
  - [HASH | class | attrib(带[]中括号) | pseudo(伪元素伪类选择器带：或者：：) | negation(带NOT)]
- 声明
  - key
    - Properties（属性）
    - Variables（变量）：--开头
  - value

## CSS选择器 | 选择器语法
### 选择器语法
- 简单选择器
  - *：同用选择器，可选中任何元素，相当于没有选择器
  - div svg|a：type selector，类型选择器
  - .cls：可以用空白作为分隔符，指定多个class
  - #id
  - [attr=value]
  - :hover：伪类
  - ::before
  - 
- 选择器语法
  ![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqepkfrkmpj30vw0octts.jpg)
## 选择器优先级
对一个选择器里包含的所有简单选择器进行计数

## 伪类
- 链接/行为
  - :any-link：匹配所有超链接
  - :link :visited：:link匹配还未访问过的超链接；:visited表示已经访问过的超链接
  - :hover：鼠标移上去
  - :active
  - :focus：获得焦点的元素
  - :target：链接到当前的目标

- 树结构
  - :empty：表示此元素是否有子元素
  - :nth-child()：表示此元素是父元素的第几个child
  - :nth-last-child()：与nth一样，不过是从后往前数 
  - :firsr-child :last-child :only-child

- 逻辑型
  - :not伪类
  - :where :has


## 伪元素
- ::before：在元素内容前插入一个伪元素
- ::after：在元素内容后插入一个伪元素
  应用了before，after属性之后，declaration里可以写content属性，只要写了content属性，就会像真正的dom元素可以生成盒参与后续的排版和渲染；（通过选择器向界面上添加一个不存在的元素）
- ::first-line：第一行
- ::first-letter：第一个字母
  用一个不存在的元素把一部分文本括起来
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqfaam6famj30uq0nktjy.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqfabvyotoj31480iuqem.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqfadgg5f9j31700ma491.jpg)

