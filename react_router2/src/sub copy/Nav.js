import '../css/Nav.css';

import Main from '../Main';
import Javascript from './Javascript';
import Typescript from './Typescript';
import React from './React';

import { Route, Routes, NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div id='nav'>
            <ul>
                <li><NavLink to='/'>Main</NavLink></li>
                <li><NavLink to='/Javascript'>Javascript</NavLink></li>
                <li><NavLink to='/Typescript'>Typescript</NavLink></li>
                <li><NavLink to='/React'>React</NavLink></li>
            </ul>
            <Routes>
                <Route path='/' Component={<Main />}></Route>
                <Route path='/Javascript' Component={<Javascript />}></Route>
                <Route path='/Typescript' Component={<Typescript />}></Route>
                <Route path='/React' Component={<React />}></Route>
            </Routes>
        </div>
    );
}