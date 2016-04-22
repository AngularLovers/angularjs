ng-book
=======
#####这是ng-book上配套的代码，附带有pdf
这个分支是供自己学习用的，里面有很多东西自己有改动过,想看我学习过程记的笔记可以check本分支。        
想要ng-book配套源码请check master分支。[传送门](https://github.com/qq83387856/ng-book-code/tree/master)
####### ng-book 英文原版（1.5.x）和中文版(1.2.x)电子书  传送门 [https://github.com/qq83387856/ng-book-code/tree/1.0/pdf](https://github.com/qq83387856/ng-book-code/tree/1.0/pdf)
####### ng2-book 配套源码（请选择最新版本的分支下载）  传送门 [https://github.com/qq83387856/ng2-book-code](https://github.com/qq83387856/ng2-book-code)

#####在知识爆炸的年代，我们不愿成为知识的过客，拥抱开源文化，发挥社区的力量，让我们获得自我提升。



###angularjs 1.x学习记录
#####1.不要复用controller
#####2.模块化:一切都是从模块开始的。
#####3.不要在controller中操作dom,使用指令去做
#####4.不要在controller中做数据格式化，使用表单控件去操作
#####5.不要在controller中使用数据过滤，使用filter
#####6.controller之间不要互相调用，使用service
#####7. $.scope和$rootScope(根作用域) 是数据模型的顶层，可以赋值、方法  向上继承  提供的方法 $watch()  $apply()
#####8. $emit('xxx')向上传递  $.broadcast('xx')向下传递
#####9. 调试  angular.element($0).scope()
#####10.路由(ngRoute)：angular-router（不可嵌套）  一般使用 ui-router 可嵌套
#####11.没有ng-model绑定双向视图，但要实时更新用$scope.$apply(func)，典型场景:实时显示当前时间的功能。