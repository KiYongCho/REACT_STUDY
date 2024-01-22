// 1. 유사엘리먼트 내부에 이벤트속성(onChnage, onClick 등등) 값으로 표현식(콜백함수)을 사용해 이벤트 처리
// 2. 하위컴포넌트에 onChangeMode라는 속성을 사용해 이벤트 처리

export default function ReactEvents() {
    return (
        <>
            <p>
                <a href='http://www.naver.com' onClick={gotoLink}>네이놈</a>
            </p>
            <select onChange={selChange}>
                <option value=''>--선택--</option>
                <option value='ko'>한국</option>
                <option value='cn'>중국</option>
                <option value='jp'>일본</option>
            </select>
            <p>
                남성 <input type='checkbox' name='cb' value='male' onClick={cbClick} />&nbsp;
                여성 <input type='checkbox' name='cb' value='female'  onClick={cbClick} />
            </p>
            <p>
                입력 : <input type='text' onKeyUp={txtChange} />
            </p>
            <Article onChangeMode={function(event) {console.log(event.target.value);}} />
        </>
    );

    function gotoLink(event) {
        event.preventDefault();
        window.location.href = 'http://www.google.com';
    }

    function selChange(event) {
        const value = event.target.value;
        if (value) {
            console.log(value);
        }
    }

    function cbClick(event) {
        console.log(event.target.value);
    }

    function txtChange(event) {
        console.log(event.target.value);
    }

}

function Article(props) {
    return (
        <textarea onKeyUp={props.onChangeMode}></textarea>
    );
}