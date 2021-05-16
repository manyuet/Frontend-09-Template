# HTML解析
## 浏览器架构
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq6pqwwfluj31hk0ii4ah.jpg)
## parse模块的文件拆分
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq6s9qpq2sj30uo07gq84.jpg)
## 用FSM实现HTML的分析
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq6sk88i86j30wq08o44z.jpg)
## 解析标签
1. 开始标签
2. 结束标签
3. 自封闭标签
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq6tmbtccdj30rc07ctd5.jpg)
## 创建元素
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq6twsbzflj318i0cc48t.jpg)
## 处理属性
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7ltbhv0rj310a09q45w.jpg)
## 用token构建dom树
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7nfphccxj316g0g4k8b.jpg)
## 将文本节点加到dom树
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7nrxjeynj30tw0b20z9.jpg)
# css计算
## 收集css规则
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7odi3cj8j313m0d0x13.jpg)
## 添加调用
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7oih54psj30ym0a2aji.jpg)
## 获取父元素序列
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7omdwgf0j31g20pi1kx.jpg)
## 选择器与元素的匹配
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq7oyqyao9j30yq07e44c.jpg)
## 计算选择器与元素匹配
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq8b136m6bj31cu0cc4bi.jpg)
## 生成computed属性
一旦选择匹配，就应用选择器到元素上，形成computedStyle
## specificity的计算逻辑
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq8bwyjx2sj318m0cy16s.jpg)
