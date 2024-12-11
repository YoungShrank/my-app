# HEAD
 - abstract  
   react中如何实现内部数据到dom，以及dom到内部数据的绑定。我要怎么做。
 - date  
  2024/12/10
 - author  
   Young

# BODY

## 背景
react 使用监听修改内部数据，反过来可使用setState 渲染到dom。 
问题来了，什么时候知道要渲染呢？ react 的常规操作是state作为内部数据，setState将 state的变化和渲染绑定在一起。好吧，确实OK，
但是也有个暴力的方法，那就是每次修改state都会触发全量渲染。



