/* React Router DOM */
// - 경로별 컨텐츠 또는 페이지를 설정할때 사용됨
// - BrowserRouter 컴포넌트 또는 HashRouter 컴포넌트로 App 컴포넌트를 감싸준다.
// - BrowserRouter 컴포넌트 : 웹브라우져 기반의 라우터
// - HashRouter 컴포넌트 : 웹서버가 다른 URL호출시 동일한 페이지를 보여줄 수 없는 경우 (주소앞에 /#/이 붙음)
// - HashRouter는 웹페이지 검색에 불리하므로 실제 프로젝트에서는 거의 사용되지 않는다.
// - Routes 컴포넌트 : Route들의 모임
// - Route 컴포넌트 : path(경로)와 element(컴포넌트)
// - Link 컴포넌트 : to(경로), a엘리먼트는 페이지가 리로딩되므로 Link컴포넌트를 사용해 리로딩 방지
// - NavLink 컴포넌트 : Link의 업그레이드버젼, 만들어질때 현재 경로에 해당하는 NavLink의 class 속성이 active로 설정됨
// - useParams : 라우팅시 파라미터정보들을 가진 훅(hook)

import { Route, Routes, Link, NavLink, useParams } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div>
        <p>
          {/* <a href='/'>Home</a>&nbsp;
          <a href='/Javascript'>Javascript</a>&nbsp;
          <a href='/Typescript'>Typescript</a>&nbsp;
          <a href='/React'>React</a> */}
          {/* <Link to='/'>Home</Link>&nbsp;
          <Link to='/Javascript'>Javascript</Link>&nbsp;
          <Link to='/Typescript'>Typescript</Link>&nbsp;
          <Link to='/React'>React</Link> */}
          <NavLink to='/'>Home</NavLink>&nbsp;
          <NavLink to='/Javascript'>Javascript</NavLink>&nbsp;
          <NavLink to='/Typescript'>Typescript</NavLink>&nbsp;
          <NavLink to='/React'>React</NavLink>
        </p>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/javascript' element={<Javascript />} />
        <Route path='/javascript/*' element={<Javascript />} /> {/* nested router */}
        <Route path='/typescript' element={<Typescript />} />
        <Route path='/react' element={<React />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home 페이지</h2>
    </div>
  );
}

function Javascript() {
  return (
    <>
      <div>
        <h2>Javascript 페이지</h2>
        <p>
          <NavLink to='/Javascript/1'>sub1</NavLink>&nbsp;
          <NavLink to='/Javascript/2'>sub2</NavLink>
        </p>
      </div>
      <Routes>
        <Route path='/:pid' element={<JavascriptSub />} />
      </Routes>
    </>
  );
}

function JavascriptSub() {
  // 파라미터 정보를 useParams 훅을 이용해 params에 저장
  const params = useParams();
  const pid = params.pid;
  return (
    <div>
      <h3>Javascript 서브페이지 {pid}</h3>
    </div>
  );
}

function Typescript() {
  return (
    <div>
      <h2>Typescript 페이지</h2>
    </div>
  );
}

function React() {
  return (
    <div>
      <h2>React 페이지</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
    </div>
  );
}
