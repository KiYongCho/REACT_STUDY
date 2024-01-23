/* 스테이트 (State) */
// - 컴포넌트 내부의 데이터
// - 스테이트의 값(value)과 값변경자(setter)로 구성
// - prop은 컴포넌트 내부로 외부컴포넌트의 속성값을 가져오기 위해 사용되고
//   state는 컴포넌트 내부의 값을 저장하고 값의 변경에 따라 UI를 실시간 변경하기 위해 사용됨

import {useState} from 'react';

export default function ReactState() {
    const [count, setCount] = useState(0);
    let [num, setNum] = useState(2);
    const contentArr = [
        'Javascript Content... Javascript is...', 
        'Typescript Content... Typescript is...', 
        'React Content... React is...'
    ];
    const [content, setContent] = useState(contentArr[0]);
    const [race, setRace] = useState([0, 0, 0]);
    return (
        <div>
            <h2>1. 카운터</h2>
            <p><button onClick={increaseCount}>클릭</button>&nbsp;<span id="counter"></span></p>
            <h2>2. 구구단</h2>
            <p><button onClick={printGugudan}>클릭</button></p>
            <p><span id='gugudan'></span></p>
            <h2>3. 컨텐츠변경 1</h2>
            <ul onClick={changeContent}>
                <li data-key='0'>Javascript</li>
                <li data-key='1'>Typescript</li>
                <li data-key='2'>React</li>
            </ul>
            <p><span id='contents'>{content}</span></p>
        </div>
    );
    function increaseCount() {
        setCount(count + 1);
        document.querySelector("#counter").textContent = count;
    }
    function printGugudan() {
        let str = '';        
        while (num < 10) {
            for (let i=1; i<10; i++) {
                str += `${num} * ${i} = ${num*i}&nbsp;&nbsp;`;
            }
            str += '<br />';
            setNum(num = num +1);            
        }
        document.querySelector("#gugudan").innerHTML = str;        
    }
    function changeContent(e) {
        setContent(contentArr[e.target.dataset.key]);
    }
}
