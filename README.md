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
    
    // stop after 24 hours
    if(pass == 60*60*24){
        this.stop();
    };

}, 1000);

// 1
// 2
// 3
// 4
// 5
// 6
// ...
// 86400
```

这个例子中的 `pass` 是一个计数器， 表示当前经过了多少个1000毫秒。

## usage 2

```javascript
// automatic stop after 6 seconds
var timer = new Interval(function(pass){

    console.log(pass);

}, 1000, 6);

// 1
// 2
// 3
// 4
// 5
// 6
```

这个例子中的定时器会在6秒后自动停止。

## usage 3

```javascript
var timer = new Interval(function(pass, surplus){

    console.log('stop after ' + surplus + ' seconds');

}, 1000, 6);

// stop after 5 seconds
// stop after 4 seconds
// stop after 3 seconds
// stop after 2 seconds
// stop after 1 seconds
// stop after 0 seconds
```

这个例子会显示距离停止还有多少秒。

## usage 4

```javascript
var timer = new Interval(function(pass, surplus){

    console.log('stop after ' + surplus + ' seconds');

}, 1000, 6, true);

// stop after 6 seconds
// stop after 5 seconds
// stop after 4 seconds
// stop after 3 seconds
// stop after 2 seconds
// stop after 1 seconds
// stop after 0 seconds
```

这个例子与上个例子不同的地方在于， 回调函数会立即被调用， 而不是1秒之后。

