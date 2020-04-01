import React, {} from 'react';
import Styled from 'styled-components';

function PostPub(){

    return (
        <PostPubContent>
            <HeaderPub>
                <TitlePost>Keep yourself safe and informed</TitlePost>
                <ButtonClose>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 294.843 294.843" height="20px" fill="#ff4500">
                        <g>
	                        <path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136   c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786   C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835   c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165   C294.843,66.133,228.71,0,147.421,0z"/>
                            <path d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236   c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"/>
                            <path d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485   L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"/>
                            <path d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485   c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"/>
                        </g>
                    </svg>
                </ButtonClose>
            </HeaderPub>

            <Paragraph>Visit r/Coronavirus to talk about COVID-19, and visit the Centers for Disease Control at CDC.gov for more information.</Paragraph>
            <PostGroup>VISIT R/CORONAVIRUS</PostGroup>
        </PostPubContent>
    );
}

const PostPubContent = Styled.div`
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    width: 100%;
`;

const HeaderPub = Styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`;

const ButtonClose = Styled.button`
    background-color: transparent;
    border: none;
    align-self: center;
    align-content: center;
    display: grid;
`;

const TitlePost = Styled.h1`
    font-size: 120%;
    color: #ff4500;
    margin: 0;
`;

const Paragraph = Styled.p`
    font-size: 80%;
`;

const PostGroup = Styled.button`
    color: white;
    background-color: #ff4500;
    border-radius: 40px;
    &:hover{
        color: black;
        background-color: #dae0e6;
    }
`;


export default PostPub;