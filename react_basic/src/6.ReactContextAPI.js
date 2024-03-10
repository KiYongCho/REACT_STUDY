// Context API
// 전역적 상태관리를 위한 API
// useState를 통해서 컴포넌트단위의 상태관리를 한다면
// Context API를 통해서는 하위컴포넌트 전체의 상태관리를 할 수 있음
// createContext로 전역상태를 생성한 후 useContext훅을 통해 사용
// context.Provider의 value를 설정하면 전체 하위컴포넌트의 상태가 일괄 변경됨

import { createContext, useContext } from "react";

const obj = {
    name: '홍길동',
    age: 20
}

const context = createContext(obj);

export default function ReactContextAPI() {

    const useCon = useContext(context);

    return (
        <GrandParentComponent />
    );
}

function GrandParentComponent() {
    const useCon = useContext(context);
    return (
        <context.Provider value={{name: '강감찬', age: 30}}>
            <div id='grandParent'>
                <p>GrandParentComponent : {useCon.name} {useCon.age}</p>
                <ParentComponent />
            </div>
        </context.Provider>
    );
}

function ParentComponent() {
    const useCon = useContext(context);
    return (
        <div id='parent'>
            <p>ParentComponent : {useCon.name} {useCon.age}</p>
            <ChildComponent />
        </div>
    );
}

function ChildComponent() {
    const useCon = useContext(context);
    return (
        <div id='child'>
            <p>ChildComponent : {useCon.name} {useCon.age}</p>
        </div>
    );
}
