import React, {} from 'react';
import Styled from 'styled-components';
import ProfilImg from '../../images/profil.jpg'

function User({groupPost, userConnected}){

    return (
        <UserContent>
            <UserView>
                <UserImg src={ProfilImg} alt=""/>
                <UserH4>R/{groupPost}</UserH4>
            </UserView>
        </UserContent>
    );
}

const UserContent = Styled.div`
`;

const UserView = Styled.div`
    display: flex;
    align-items: center;
    height: 42px;
`;

const UserImg = Styled.img`
    width: 25px;
    border-radius: 22px;
    height: 25px;
    padding: 8px;
`;

const UserH4 = Styled.h4`
    margin: 0;
    font-size: 11px;
`;


export default User;