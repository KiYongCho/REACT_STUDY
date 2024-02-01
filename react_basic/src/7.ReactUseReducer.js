// useReducer hook 
// - reducer는 현재 상태와 명령(action)을 인자로 받아서 명령에 따른 상태값을 반환하는 함수이다.
// - dispatcher는 reducer에게 명령(action)을 전달하는 역할을 하는 함수이다.
// - reducer를 통해 컴포넌트의 상태를 별도로 관리할 수 있다는 장점이 있다.
// - 디자인패턴 중 facade패턴과, command패턴을 사용하여 상태관리를 하게 된다.
// - 형식 : const [상태변수, dispatcher] = useReducer(reducer, 상태초기값);

import { useReducer } from 'react';

export default function ReactUseReducer() {
    
    const [count, dispatcher] = useReducer(reducer, 0);

    function decrement() {
        dispatcher('DECREMENT');
    }    

    function initialize() {
        dispatcher('INITIALIZE');
    }

    function increment() {
        dispatcher('INCREMENT');
    }

    return (
        <div>
            <p>
                <button value='-' onClick={decrement}>감소</button>&nbsp;
                <button value='0' onClick={initialize}>초기화</button>&nbsp;
                <button value='+' onClick={increment}>증가</button>&nbsp;
                <span>{count}</span></p>
        </div>
    );
}

function reducer(count, action) {
    switch (action) {
        case 'DECREMENT':
            return count - 1;
        case 'INITIALIZE':
            return 0;
        case 'INCREMENT':
            return count + 1;
    }
}