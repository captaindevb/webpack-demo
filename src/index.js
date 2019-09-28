var _ = require('lodash');
// named import: 반드시 {}안에 동일한 이름 사용
import {area} from './js/circle';
// default import {} 없이 사용하되, 이름을 임의로 바꿀 수 있다.
import aaa from './js/cube';
import './style.css';
import './hello.scss';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

    return element;
}

console.log(area(10));
console.log(aaa.bulk(10));
console.log(aaa.test(10));

document.body.appendChild(component());