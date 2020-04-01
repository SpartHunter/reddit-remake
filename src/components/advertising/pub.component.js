import React from 'react';
import Styled from 'styled-components';
import PostPub from "../postPub/postPub.component";
import PubPoster from '../../images/pubs/pub2.jpeg'


function Advertising(){

    return (
        <PubContent>
            <PubH1>Trending Today</PubH1>
            <PubView>
                <PubImg src={PubPoster} alt="hello"/>
            </PubView>
            <PubH1>Popular Post</PubH1>
            <PostPubView>
                <PostPub/>
            </PostPubView>
        </PubContent>
    );
}

const PubContent = Styled.div`
`;

const PubH1 = Styled.h1`
    margin: 0;
    font-size: 15px;
    padding-top: 15px;
    text-align: center;
`;

const PubView = Styled.div`
    display: flex;
    padding: 15px;
    padding-top: 2px;
    background-color: #dae0e6;
    justify-content: center;
`;

const PostPubView = Styled.div`
    display: flex;
    padding-top: 4px;
`;

const PubImg = Styled.img`
    border-radius: 20px;
`;
export default Advertising;