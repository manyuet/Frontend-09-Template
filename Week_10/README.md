 ## 根据浏览器属性进行排版
 重点：将width ，height， left， right，top， bottom等属性抽象为main cross相关属性
 排版使用flex排版为例，实现排版算法
 主轴：排版时主要的延伸方向
 交叉轴：与主轴垂直
 flex-direction:row（设置主轴方向） 
 ![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq9h6wlyaqj31g60mogvh.jpg)

 ## 收集元素进行
 ![img](https://tva1.sinaimg.cn/large/008i3skNgy1gq9i7a919kj31hu0hithr.jpg)

 ## 计算主轴
 - 根据flex 相关属性计算每一行的尺寸
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqanxbk7nfj31go0hs15c.jpg)

## 计算交叉轴
![img](https://tva1.sinaimg.cn/large/008i3skNgy1gqbthb4vktj31ha0mitkb.jpg)