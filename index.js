const colorToRgb = (str) => {
    const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    // 校验颜色格式是否符合要求
    if (reg.test(str)) {
        // 去除 # 号 
        let tempStr = str.slice(1)
        let temp = []
        // 如果是缩写恢复六位
        if (tempStr.length === 3) {
            tempStr = tempStr.split('').map(item => String(item) + String(item)).join('')
        }

        // 跳位遍历
        for (let i = 0; i < tempStr.length; i += 2) {
            temp.push(parseInt('0x' + tempStr.slice(i, i + 2)))
        }

        return 'rgb(' + temp.join(',') + ')'

    } else {
        return str
    }
}

// 数组排序去除
// 升序，降序
// 已什么为准排序、去重
const arrSortRepeat = function(arr, key = 'id') {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        throw new Error('必须输入数组')
    } else if (typeof key !== 'string') {
        throw new Error('key必须输入字符串')
    }
    const temp = []
    const obj = {}

    // 排序
    arr.sort((a, b) => {
        return a[key] ? a[key] - b[key] : a - b
    })

    // 去重

    arr.forEach(item => {
        if (Object.prototype.toString.call(item) === '[object Object]') {
            // 输入的key值不正确时
            if (Object.prototype.toString.call(item[key]) === '[object Undefined]') throw new Error('输入的key不存在')

            if (!obj[item[key]]) {
                temp.push(item)
                obj[item[key]] = true
            }
        } else {
            if (temp.indexOf(item) === -1) {
                temp.push(item)
            }
        }
    })

    return temp
}

export {
    colorToRgb,
    arrSortRepeat
}