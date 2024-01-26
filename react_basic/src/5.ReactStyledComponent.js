/* Styled Component */
// npm install styled-component
// import styled from 'styled-components';
// 스타일이 적용된 컴포넌트를 만들기 위해 사용
// 기존컴포넌트에 스타일을 적용하기 위해서도 사용
// css속성표기법을 사용할 수 있고 ``(백틱함수)를 사용

import styled from 'styled-components';

export default function ReactStyledComponent() {

    // 일반적인 React Button에 styled-component를 적용하려면
    // className속성을 지정해 주어야 함
    const CommonButton = props => {
        return <button className={props.className}>{props.children}</button>;
    }
    const StyledCommonButton = styled(CommonButton)`
        font-size: 2em;
    `;

    // 동적 스타일 변경
    const DynamicButton = props => {
        return <button className={props.className}>{props.children}</button>;
    }
    const StyledDynamicButton = styled(DynamicButton)`
        font-size: ${
            function(props) {
                return props.fs + 'em';
            }
        }
    `;

    return (
        <>
            <NoUseStyledComponent />
            <UseStyledComponent />
            <CommonButton>CommonButton</CommonButton>
            <StyledCommonButton>StyledCommonButton</StyledCommonButton>
            <DynamicButton>DynamicButton</DynamicButton>
            <StyledDynamicButton fs="5">StyledDynamicButton</StyledDynamicButton>
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
    // 스타일을 적용한 div
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