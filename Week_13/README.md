学习笔记
# 重学HTML
HTML的定义：XML与SGML
quot：双引号
amp：&
lt：<
gt：>



## HTML标签语义
<aside> 标签定义 article 以外的内容。aside 的内容应该与 article 的内容相关。

<main> 标签规定文档的主要内容。元素中的内容对于文档来说应当是唯一的。它不应包含在文档中重复出现的内容，比如侧栏、导航栏、版权信息、站点标志或搜索表单。

<article> 标签定义外部的内容。外部内容可以是来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。

<hgroup> 标签用于对网页或区段（section）的标题进行组合。

当没有合适的标签去处理某一个语义的时候，可以使用class作为一个补充

<abbr> 标签指示简称或缩写，比如 "WWW" 或 "NATO"。通过对缩写进行标记，您能够为浏览器、拼写检查和搜索引擎提供有用的信息。

<strong> 标签和 <em> 标签一样，用于强调文本，但它强调的程度更强一些。浏览器通常会以不同于 <em> 标签的方式来显示 <strong> 标签中的内容，通常是用加粗的字体（相对于斜体）来显示其中的内容，这样用户就可以把这两个标签区分开来了。

<figure> 标签规定独立的流内容（图像、图表、照片、代码等等）。

<footer> 标签定义文档或节的页脚。元素应当含有其包含元素的信息。页脚通常包含文档的作者、版权信息、使用条款链接、联系信息等等。
您可以在一个文档中使用多个 <footer> 元素。

## 浏览器API | DOM API
浏览器api分为很多不同种类，dom是其中最重要的一个类别
BOM： 浏览器对象模型，是很小的一组api

DOM API分类：
- 节点部分
- 事件部分
- range API：相比节点api，能够更加精确的操作dom树，性能也是更好的，应用性较差

### 节点类api
dom树上存在的，都是继承自一个叫做node的类，node是所有节点的基类
挂在dom树上的一定是node，但不一定是element
node里大部分节点是属于element
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqzo8shfcvj30vs0lathl.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqzob3j9klj318c0lc4dj.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqzof485ryj31i80nynp2.jpg)

#### 修改操作
- appendChild
- insertBefore
- removeChild
- replaceChild
### 事件API
addEventListener：
- 第一个参数是事件的类型，比如click，keyboard，keydown，keyup，mousedown，mouseup
- 第二个参数是listener
- 第三个参数是可以是true或者false，改变事件的模式，捕获模式，或者冒泡模式

### range api
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gr0896kyzjj30qk0m24ay.jpg)


## CSSOM
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gr0i7544l7j31fu0din9n.jpg)

## CSSOM view
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gr0icm3rlbj312k0oqnfo.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gr0ifwyxytj317e0pedsw.jpg)
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gr0igzc4qmj30oo0b6tdf.jpg)
