/* Styled Component */
// 스타일이 적용된 컴포넌트를 만들기 위해 사용
// 기존컴포넌트에 스타일을 적용하기 위해서도 사용
// css 방식으로 css속성을 정의할 수 있고 ``(백틱함수)를 사용
// npm install styled-component
// import styled from 'styled-components';

import styled from 'styled-components';

export default function ReactStyledComponent() {
    return (
        <>
            <NoUseStyledComponent />
            <UseStyledComponent />
        </>
    );
}

function NoUseStyledComponent() {
    const style = {
        fontSize: '2em',
        color: 'yellow',
        backgroundColor: 'red'
    }
    return (
        <div style={style}>Hello</div>
    );
}

function UseStyledComponent() {
    // 스타일이 적용된 div
    const StyledDiv = styled.div`
        font-size: 3em;
        color: white;
        background-color: blue;
    `;
    // 기존 컴포넌트에 스타일 추가
    const StyledDiv2 = styled(StyledDiv)`
        border: 3px dotted yellow;
        text-align: center;
    `;
    return (
        <>
            <StyledDiv>Hello</StyledDiv>
            <StyledDiv2>Hello</StyledDiv2>
        </>
    );
}