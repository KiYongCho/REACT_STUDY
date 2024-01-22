/* React */

// - React는 사용자정의컴포넌트를 정의해 사용하기 위한 CBD기반 JS라이브러리
// - React 컴포넌트는 function을 이용해 만드는 방법과 class를 이용해 만드는 방법이 있다.
// - function을 이용해 컴포넌트를 만드는 방법이 일반적이다.
// - return ()의 괄호 안에는 JSX(JavaScript Syntax eXtension) 문법을 사용한다.
// - JSX문법은 빌드과정에서 Babel을 통해 JS로 변환된다.

// 1. function 문법
/*
export default function ReactComponent() {
    const hello = 'Hello React!';
    return (
        <h1>{hello}</h1>
        // React.createElement('h1', null, 'Hello React!');
    );
}
*/

// 2. class 문법
import {Component} from 'react';
export default class ReactComponent extends Component {
    render() {
        const hello = 'Hello React!';
        return (
            <h1>{hello}</h1>
        );
    }
}