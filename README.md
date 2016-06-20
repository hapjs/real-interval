# real-interval

如果你用`setTimeout`或`setInterval`实现过网页倒计时功能，你就会发现：

```
当电脑或者APP休眠了一段时间后，倒计时会出现问题：它比正确的时间慢了。
```

real-interval能解决这个问题。

当休眠的电脑被唤醒后，它会计算出正确的运行时间，你的回调函数可以据此显示正确的剩余时间，或者判断何时应该停止倒计时。

## 安装

你可以通过npm安装real-interval

```
npm install real-interval
```

OR通过脚本引入它：

```
<script src="./build/interval.js"></script>
```

## usage 1

```javascript
var timer = new Interval(function(pass){
    
    console.log(pass);
    
    // stop after 60 seconds
    if(pass == 60){
        this.stop();
    };

}, 1000);
```

这个例子中的 `pass` 是一个计数器， 表示当前经过了多少个1000毫秒。

## usage 2

```javascript
// automatic stop after 60 seconds
var timer = new Interval(function(pass){

    console.log(pass);

}, 1000, 60);
```

这个例子中的定时器会在60秒后自动停止。

## usage 3

```javascript
var timer = new Interval(function(pass, surplus){

    console.log('automatic stop after ' + surplus + ' seconds');

}, 1000, 60);
```

这个例子会显示距离自动停止还有多少秒。
