/* 스테이트 (State) */
// - 컴포넌트 내부의 데이터
// - 스테이트의 값(value)과 값변경자(setter)로 구성
// - prop은 컴포넌트 내부로 외부컴포넌트의 속성값을 가져오기 위해 사용되고
//   state는 컴포넌트 내부의 값을 저장하고 값의 변경에 따라 UI를 실시간 변경하기 위해 사용됨

import {useState} from 'react';

export default function ReactUseState() {
    const [count, setCount] = useState(0);
    let [num, setNum] = useState(2);
    const contentArr = [
        'Javascript Content... Javascript is...', 
        'Typescript Content... Typescript is...', 
        'React Content... React is...'
    ];
    const [content, setContent] = useState(contentArr[0]);
    const [num2, setNum2] = useState([0, 0, 0]);
    let [data, setData] = useState('');

    return (
        <div>
            <h2>1. 카운터</h2>
            <p><button onClick={increaseCount}>클릭</button>&nbsp;<span id="counter"></span></p>
            <h2>2. State 연동</h2>
            <p><button onClick={startNum2}>클릭</button></p>
            <p>
                <span data-key='0'>{num2[0]}</span>&nbsp;
                <span data-key='1'>{num2[1]}</span>&nbsp;
                <span data-key='2'>{num2[2]}</span>
            </p>            
            <h2>3. 구구단</h2>
            <p><button onClick={printGugudan}>클릭</button></p>
            <p><span id='gugudan'></span></p>
            <h2>4. 컨텐츠변경</h2>
            <ul onClick={changeContent}>
                <li data-key='0'>Javascript</li>
                <li data-key='1'>Typescript</li>
                <li data-key='2'>React</li>
            </ul>
            <p><span id='contents'>{content}</span></p>
            <h2>5. 데이터가져오기</h2>
            <p><button onClick={changeData}>전체데이터</button></p>
            <p><span id='data'>{data}</span></p>            
        </div>
    );
    function increaseCount() {
        setCount(count + 1);
        document.querySelector("#counter").textContent = count;
    }
    function startNum2(e) {
        setNum2([
            num2[0] = num2[0]+1, 
            num2[1] = num2[0]+num2[1], 
            num2[2] = num2[1]+num2[2]
        ]);
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
    function changeData(e) {
        let jsonStr;
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => setData(jsonStr = JSON.stringify(result)));
    }
}
