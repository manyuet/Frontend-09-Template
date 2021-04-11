学习笔记
### BNF产生式
- <符号> ::= <使用符号的表达式>
- <符号>：非终结符
- <表达式>：由一个符号序列或多个符号序列构成，每个符号序列整体都是左端符号的一种可能的替代
- 未在左端出现的符号称为终结符
- ::=  表示定义
- |    表示或
- <>   括起来的表示非终结符

### 深入理解产生式（乔姆斯基谱系）
- 无限制文法
  - 定义的左边和右边随便写（？）
- 上下文相关文法 `?`<A>?::=`?`<B>?
  - 左边，右边可写多个非终结符
  - 左边变化的只能有1个
  - `?` :上文
  - ？ ： 下文
  - 根据前后判断每个符号的意义（？）
- 上下文无关文法
  - 产生式左边只能有一个符号（非终结符）
- 正则文法

### 现代语言的分类
- 形式语言-用途
  - 数据描述语言（JSON,HTML,XAML,SQL,CSS）
  - 编程语言（C,C++,Java,C#,Python,Ruby,Perl,Lisp,T-SQL,Clojure,Haskell,JavaScript）
- 形式语言-表达方式
  - 声明式语言（只说明结果）JSON,HTML,XAML,SQL,CSS,Lisp,Clojure,Haskell
  - 命令型语言（达成结果的每一个步骤）C,C++,Java,C#,Python,Ruby,Perl,JavaScript）

### JavaScript类型
- Number
- String
- Boolean
- Object
- Null
- Undefined
- Symbol