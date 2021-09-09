## 安装方法

```
npm i -D tools-hy
```

### 使用方法

```
import { * } from 'tools-hy'
```


#### 1、16进制颜色转rgb格式 colorToRgb(str)


入参 | 是否必填
---|---
String | 否

*说明：*
非字符串传入会不作处理直接返回

###### 例子

```
// index.js

...
import { colorToRgb } from 'tools-hy'
colorToRgb('#fff') // rgb(255,255,255)
...

```

#### 2、数组排序去重 arrSortRepeat(arr, ?key)


入参|类型|是否必填|默认值
---|---|---|--- 
arr|Array | 是 | -
key|String|否|id

*说明:*
1. 支持简单数组去重排序
2. 强校验arr数据类型
3. 强校验key值类型，以及key值是否存在


###### 例子

```
// index.js

...
import { arrSortRepeat } from 'tools-hy'
<!--简单数组-->
const arr1 = [2,2,3,4,1]
arrSortRepeat(arr1) // [1,2,3,4]

<!--对象数组-->
const arr2 = [{a:2,name:'222'},{a:1,name:'111'},{a:3,name:'333'},{a:2,name:'222'}]
arrSortRepeat(arr1) // 抛错提示key不存在
arrSortRepeat(arr1, 'a') // 正确返回结果
...

```