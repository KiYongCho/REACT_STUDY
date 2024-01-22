// 레이아웃 구조 : ReactLayout(div#wrapper) > (Header, Nav, Content(div#content), Footer)

import './css/3.ReactLayout.css';

const contents = ['Javascript contents', 'Typescript contents', 'React contents'];

export default function ReactLayout() {
    const title = 'My React Website';
    const menus = ['Javascript', 'Typescript', 'React'];
    const footerText = 'Copyright © 2024 me';
    return (
        <div id='wrapper'>
            <Header title={title} />
            <Nav menus={menus} />
            <Content contents={contents[0]} />
            <Footer footerText={footerText} />
        </div>
    );
}

function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

function Nav(props) {
    function changeMenu(event) {
        document.querySelector("#content").textContent = contents[event.target.dataset.index];
    }    
    return (
        <nav>
            <ul>
                {props.menus.map(
                    (menu, index) => <li data-index={index} key={index} onClick={changeMenu}>{menu}</li>
                )}
            </ul>
        </nav>
    );
}

function Content(props) {
    return (
        <div id='content'>{props.contents}</div>
    );
}

function Footer(props) {
    return (
        <footer>
            <p>{props.footerText}</p>
        </footer>
    );
}