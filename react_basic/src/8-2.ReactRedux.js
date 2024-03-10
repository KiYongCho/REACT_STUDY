import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(currState, action) {
    if (currState === undefined) {
        return {count: 0};
    }
    if (action.type === 'plus1') {
        return {...currState, count: currState.count + 1};
    }
    if (action.type === 'plus2') {
        return {...currState, count: currState.count + 2};
    }
    if (action.type === 'plus3') {
        return {...currState, count: currState.count + 3};
    }        
}

const store = createStore(reducer);

export default function ReactRedux_home() {
    return (
        <div>
            <Provider store={store}>
                <Plus1 />
                <Plus2 />
                <Plus3 />
            </Provider>
        </div>
    );
}

function Plus1() {
    const dispatch = useDispatch();    
    const selector = useSelector(currState => currState.count);
    return (
        <div>
            <h2>Plus1 : 클릭시 모두 1 증가</h2>
            <p><button onClick={() => dispatch({type: 'plus1'})}> + </button> : {selector}</p>
        </div>
    );
}

function Plus2() {
    const dispatch = useDispatch();
    const selector = useSelector(currState => currState.count);
    return (
        <div>
            <h2>Plus2 : 클릭시 모두 2 증가</h2>
            <p><button onClick={() => dispatch({type: 'plus2'})}> + </button> :  {selector}</p>
        </div>
    );
}

function Plus3() {
    const dispatch = useDispatch();
    const selector = useSelector(currState => currState.count);
    return (
        <div>
            <h2>Plus3 : 클릭시 모두 3 증가</h2>
            <p><button onClick={() => dispatch({type: 'plus3'})}> + </button> :  {selector}</p>
        </div>
    );
}

