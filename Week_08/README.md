学习笔记
## 浏览器工作原理总论
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgjxoj5w3j31jc0h012k.jpg)
  - 浏览器目标：输入URL得到bitmap
## 状态机|有限状态机
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgk6wpna9j31fw0la7u3.jpg)
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpgkczefupj311o0t01fc.jpg)
## 状态机|不使用状态机处理字符串
## HTTP请求|HTTP的协议解析
- 浏览器第一步骤，HTTP状态解析
- 网络模型
  ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gphq1pbbbqj31du0sw7iw.jpg)
  - Internet：IP协议
  - TCP与IP基础知识
    - TCP传输的基础单位是`流 `
    - TCP传输的概念：一个一个数据包
    - IP地址唯一的标识
    - libnet负责构造IP包并且发送
    - labpcap负责从网卡抓所有流经网卡的IP包
  - HTTP由request和response组成
    - 必须先由客户端发起一个request然后服务端返回一个response，所以每一个request一定对应着一个response
    - HTTP协议属于文本型协议，文本型协议意味着这个协议里面内容均为字符串
      - request line：包含三个部分
        - 第一部分method：最常见post，get
        - 第二部分路径path：默认斜杆
        - 第三部分HTTP及HTTP版本
      - headers：多行，结构为key，value结构，结束是一个空行为标志进行结束
      - body：由Content-Type决定body格式，也是key，value结构
    - ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpivekvbksj310a0geamu.jpg)
    - ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpivix077tj312g0gg7ij.jpg)
    - ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpk1l3vdnxj316k0ee14b.jpg)
    - ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpo94zq2d5j31du0futpc.jpg)
    - response 格式
      ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpivtlzogfj30zu0laqbb.jpg)
      - status line：包含3个部分，与request line相反 
        - 开头：HTTP版本号（固定字符串）
        - 第二部分状态码
        - 第三部分是HTTP状态文本
        - HTTP状态码
          ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpivp41i1cj311s0fmjty.jpg)
          ![img](https://tva1.sinaimg.cn/large/008eGmZEgy1gpivpztricj311y0j0goh.jpg)
      - body格式由content type决定，chunked body是node默认返回的body格式


