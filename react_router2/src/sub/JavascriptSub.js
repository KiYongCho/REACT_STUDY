import { useParams } from 'react-router-dom';

export default function JavascriptSub() {

    const pid = useParams().pid;

    if (pid==1) return (<JavascriptSubPage1 />);
    else if (pid==2) return (<JavascriptSubPage2 />);
    else return (<></>);
}

function JavascriptSubPage1() {
    return (
        <div>
        <p>Javascript sub page 1</p>
    </div>       
    );
}

function JavascriptSubPage2() {
    return (
        <div>
        <p>Javascript sub page 2</p>
    </div>       
    );
}