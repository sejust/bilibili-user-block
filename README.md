# Bilibili 屏蔽用户
屏蔽`当前在线` `排行榜`中个人不喜欢的up主

## 使用方法
该脚本依赖于为 [Tampermonkey](http://www.tampermonkey.net);
在Tampermonkey中新建脚本，把本例脚本复制进去即可

## 添加屏蔽用户
目前只支持修改脚本

```
// 单独只在online页面屏蔽
const blockedUserOnline = [
  '123',
];
// 单独只在ranking页面屏蔽
const blockedUserRank = [
  '456',
];
// 所有页面均屏蔽
const blockedUserAll = [
  '999',
];
```
