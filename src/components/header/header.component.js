import React from 'react';
import Styled from 'styled-components';

import Search from '../search/search.component';
import Profil from '../profil/profil.component'

function Header({newPost, funcOpenPost, logInStatus, logo}){

    return (
        <HeaderNav>
            <NavContent>
                <NavLogo src={logo} alt="logo"/>
                <Search/>
                <Profil newPost={newPost} funcOpenPost={funcOpenPost} logInStatus={logInStatus}/>
            </NavContent>
        </HeaderNav>
    );
}

const HeaderNav = Styled.div `
    height: 50px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
    align-items: center;
`;
const NavContent = Styled.div `
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    background-color: white;
    padding: 5px;
`;

const NavLogo = Styled.img `
    width: 39px;
    height: 39px;
`;

export default Header;