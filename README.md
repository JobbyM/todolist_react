# 使用React 创建TodoList

## props、state 与 render 函数的关心
1. 当组件的state 或props 反生改变的时候，render 函数就会重新执行。
2. 当父组件的render 函数被运行时，它的子组件的render 都将被重新运行。

## React 中的虚拟DOM
1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实DOM，来显示
4. state 发生改变
5. 数据 + 模版 结合，生成真实DOM，替换原始的DOM

缺陷：
第一次生成了一个完整的DOM  片段
第一次生成了一个完整的DOM  片段
第二次的DOM 替换第一次的DOM， 非常耗性能

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实DOM，来显示
4. state 发生改变
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
5. state 发生改变
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

5. state 发生改变

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

## 虚拟DOM 的diff 算法

1. state 数据
2. JSX 模版
3. 数据 + 模版 生成虚拟DOM（虚拟DOM 就是一个JS 对象，用它来描述真实DOM）（损耗了性能）
['div', {id: 'abc'}, ['span', {}, 'hello world']]
4. 用虚拟DOM 结构，生成真实DOM，来显示
<div id="abc"><span>hello world</span></div>
5. state 发生改变
6. 数据 + 模版 生成新虚拟DOM（极大的提升了性能）
['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟DOM 与新的虚拟DOM 的区别，找到区别是span 中的内容（极大的提升了性能）
8. 直接操作DOM，改变span 中的内容

优点：
1. 性能提升了
2. 它使得跨端应用得以实现。React Native

Diff 算法：
1. 同层比较

## React 中的生命周期函数
生命周期函数指在某一个时期组件会自动调用执行的函数

### 初始化
设置state 和props

### 加载
1. componentWillMount
在组件即将被挂载到页面的时刻自动执行

2. render

3. componentDidMount
在组件被挂载到页面之后，自动执行

### 更新
对props
1. componentWillReceiveProps
 * 一个组件要从父组件接受参数
 * 如果这个组件第一次存在与父组件中，不会执行
 * 如果这个组件之前已经存在于父组件中，才会执行

2. shouldComponentUpdate
 组件被更新之前，他会自动执行

3. componentWillUpdate
 * 组件被更新之前，他会自动执行，但是他在shouldComponentUpdate 之后执行
 * 如果shouldComponentUpdate 返回true 它才执行
 * 如果返回false，这个函数就不会被执行了

4. render

5. componentDidUpdate
 组件更新完成之后，他会被执行

对state
1. shouldComponentUpdate
 组件被更新之前，他会自动执行

2. componentWillUpdate
 * 组件被更新之前，他会自动执行，但是他在shouldComponentUpdate 之后执行
 * 如果shouldComponentUpdate 返回true 它才执行
 * 如果返回false，这个函数就不会被执行了

3. render

4. componentDidUpdate
 组件更新完成之后，他会被执行


## Redux概念简述
Redux = Reducer + Flux

## Redux工作流程

## Action和Reducer的编写
reducer 可以接受state, 但是决不能修改state
