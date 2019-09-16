import _ from 'lodash'
import './style.css'
import Kid from './Kid.jpg'
import print from './print'
// 在 production 模式下 cube 不会被引入，文件会被压缩，而 development 反之
import { square } from './math'

// math 测试
square(2)

// 环境测试
process.env.NODE_ENV === 'production' ? console.log('production') : console.log('development')


function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // 图片添加
    let myKid = new Image()
    myKid.src = Kid
    myKid.width = 100
    element.appendChild(myKid)

    // 点击触发
    element.onclick = () => print('world') // hello world

    return element;
}

document.body.appendChild(component());