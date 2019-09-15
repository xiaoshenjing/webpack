import _ from 'lodash'
import './style.css'
import Kid from './Kid.jpg'
import print from './print'

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