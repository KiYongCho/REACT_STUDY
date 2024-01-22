// 레이아웃 구조 : ReactLayout(div#wrapper) > (Header, Nav, Content(div#content), Footer)

import './css/3.ReactLayout.css';

const contents = ['Javascript contents', 'Typescript contents', 'React contents'];

export default function ReactLayout() {
    const titleText = 'My React Website';
    const menus = ['Javascript', 'Typescript', 'React'];
    const footerText = 'Copyright © 2024 All right reserved 이츠미';
    return (
        <div id='wrapper'>
            <Header titleText={titleText} />
            <Nav menus={menus} />
            <Content contents={contents[0]} />
            <Footer footerText={footerText} />
        </div>
    );
}

function Header(props) {
    return (
        <header>
            <h1>{props.titleText}</h1>
        </header>
    );
}

function Nav(props) {
    return (
        <nav>
            <ul>
                {props.menus.map(
                    (menu, index) => <li data-index={index} key={index} onClick={changeMenu}>{menu}</li>
                )}
            </ul>
        </nav>
    );
    function changeMenu(event) {
        document.querySelector("#content").textContent = contents[event.target.dataset.index];
    }    
}

function Content(props) {
    return (
        <div id='content'>{props.contents}</div>
    );
}

function Footer(props) {
    return (
        <footer>{props.footerText}</footer>
    );
}