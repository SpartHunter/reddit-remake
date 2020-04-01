import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';

function Profil({newPost, funcOpenPost, logInStatus}){



    const [profilOpen, setProfilOpen ]= useState("none");

    const profilHandler = () => {
        console.log("entered profil handler");
        if (profilOpen === "none"){
            console.log("entered to if of profil handler");
            return setProfilOpen("flex")
        } else {
            console.log("entered to else of profil handler");
            return setProfilOpen("none")
        }
    };

    return (
        <ProfilNav onMouseEnter={profilHandler} onMouseLeave={profilHandler}>
            <Content onMouseUp={profilHandler}>
                <SpanUser><svg fill="gray" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"/></svg></SpanUser>
                <SpanSpacer> </SpanSpacer>
                <SpanCursor><svg fill="gray" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg></SpanCursor>
            </Content>
            <ProfilDrop opened={profilOpen} onMouseLeave={profilHandler} >
                <DropLink href="#" onMouseUp={profilHandler}>Profil</DropLink>
                <DropLink value={newPost} onClick={funcOpenPost} onMouseUp={profilHandler} href="#">Post</DropLink>
                <Link to={logInStatus ? ("/") : ("/login")} onMouseUp={profilHandler}>Login</Link>
                <DropLink href="#" onMouseUp={profilHandler}>Logout</DropLink>
            </ProfilDrop>
        </ProfilNav>
    );
}


const ProfilNav = Styled.div `
    display: inline-block;
    position: relative;
    flex-direction: column;
    padding: 5px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
`;

const SpanUser = Styled.span `
    display: inline-flex;
`;

const SpanSpacer = Styled.span `
    display: inline-flex;
    padding:6px;
`;

const SpanCursor = Styled.span `
    display: inline-flex;
`;

const ProfilDrop = Styled.div.attrs(props => ({
    display: props.opened,
}))`
    display: ${props => props.display};
    flex-direction: column;
    position: absolute;
    width: 114px;
    right: 2px;
    text-align: center;
    background-color: white;
    border-bottom: 2px solid #ff4500;
`;

const Content = Styled.button`
    display: flex;
    padding: 5px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    vertical-align: middle;
    height: 100%;
`;

const DropLink = Styled.a `
 text-decoration: none;
 color: #ff4500;
 padding: 5px;
`;


export default Profil;