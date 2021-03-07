学习笔记
###实现地图编辑器
####Array.fill()
- 使用指定元素填充数组
- 参数（value, start, end）
- value: 填充值
- start: 填充起始位置，可省略
- end: 填充结束为止，可省略
####DOM 事件
- onclick: 点击某个对象
- oncontextmenu: 点击鼠标右键打开上下文菜单
- ondblclick: 双击
- onmousedown: 鼠标按钮被按下
- onmousemove: 鼠标被移动
- onmouseup: 鼠标按键被松开
####mousedown: e.which
which 属性用于返回触发当前事件时按下的键盘或者鼠标按钮
which 返回值是Number类型
1：鼠标左键
2： 鼠标滚轮
3： 鼠标右键
####创建地图编辑器步骤
1. 设计一个数据结构保存地图（数组）
2. 表示地图：用单元格表示数组的每一个元素，使用 1 和 0 代表地图编辑状态
3. 编辑地图，监听鼠标事件编辑地图

###寻路-广度优先搜索
1.定义一个队列数据结构保存搜索路径
2. 
