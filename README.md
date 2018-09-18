# 使用React 创建TodoList

## props、state 与 render 函数的关心
1. 当组件的state 或props 反生改变的时候，render 函数就会重新执行。
2. 当父组件的render 函数被运行时，它的子组件的render 都将被重新运行。

## React 中的虚拟DOM
1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实DOM，来显示
4. state 反生改变
5. 数据 + 模版 结合，生成真实DOM，替换原始的DOM

缺陷：
第一次生成了一个完整的DOM  片段
第一次生成了一个完整的DOM  片段
第二次的DOM 替换第一次的DOM， 非常耗性能

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实DOM，来显示
4. state 反生改变
5. 数据 + 模版 结合，生成真实DOM，并不直接替换原始的DOM
6. 新的DOM（DocumentFragment）和原始的DOM 做比对，找差异
7. 找出input 框发生了变化
8. 只用新的DOM 中的input 原始，替换老的DOM 中的input 元素

缺陷：
性能的提升并不明显

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实DOM，来显示
<div id="abc"><span>hello world</span></div>
4. 生成虚拟DOM（虚拟DOM 就是一个JS 对象，用它来描述真实DOM）（损耗了性能）
['div', {id: 'abc'}, ['span', {}, 'hello world']]
5. state 反生改变
6. 数据 + 模版 生成新虚拟DOM（极大的提升了性能）
['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟DOM 与新的虚拟DOM 的区别，找到区别是span 中的内容（极大的提升了性能）
8. 直接操作DOM，改变span 中的内容

## 深入了解虚拟DOM

1. state 数据
2. JSX 模版

3. 数据 + 模版 生成虚拟DOM（虚拟DOM 就是一个JS 对象，用它来描述真实DOM）（损耗了性能）
['div', {id: 'abc'}, ['span', {}, 'hello world']]

4. 用虚拟DOM 结构，生成真实DOM，来显示
<div id="abc"><span>hello world</span></div>

5. state 反生改变

6. 数据 + 模版 生成新虚拟DOM（极大的提升了性能）
['div', {id: 'abc'}, ['span', {}, 'bye bye']]

7. 比较原始虚拟DOM 与新的虚拟DOM 的区别，找到区别是span 中的内容（极大的提升了性能）

8. 直接操作DOM，改变span 中的内容


// JSX => createElement => 虚拟DOM（JS 对象） => 真实的DOM
```Js
React.createElement('div', {}, 'item')
React.createElement('div', {}, React.createElement('span', {}, 'item'))
```

优点：
1. 性能提升了
2. 它使得跨端应用得以实现。React Native
