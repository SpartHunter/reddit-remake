import React, {} from 'react';
import Styled from 'styled-components';

function FilterBar(){

    return (
        <FilterContent>
            <FilterSpace>
                <FilterHot>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000"  width="20px" height="20px" fill="#ff4500">
                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                        <g><path d="M698.2,275.2c0,0,10.6,167.1-95.5,221.4c0,0,77-308.2-253.1-486.7c0,0,58.7,167.2-100.8,403.9c0,0-251.9,373.9,145.5,576.1c0,0-93.8-310.2,70.5-462.4c0,0-38.2,190,70.4,281.5c0,0,49.6-71.8,102-89.6c0,0,7.4,141.3-42.4,263.9C594.7,983.3,1046.3,729.5,698.2,275.2z"/></g>
                    </svg>
                    <h6>Hot</h6>
                    <svg fill="#ff4500" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>
                </FilterHot>
                <SpaceSpan> </SpaceSpan>
                <FilterHot>
                    <h6>Everywhere</h6>
                    <svg fill="#ff4500" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>
                </FilterHot>
            </FilterSpace>
            <FilterView>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ff4500" width="20" height="20">
                    <path d="M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"/>
                </svg>
                <svg fill="#ff4500" width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"/></svg>
            </FilterView>

        </FilterContent>
    );
}

const FilterContent = Styled.div`
    display: flex;
    padding: 10px;
    background-color: white;
    margin-top: 15px;
    justify-content: space-between;
`;

const FilterSpace = Styled.div`
    display: flex;
    height: 30px;
`;

const FilterHot = Styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f7f8;
    border-radius: 20px;
    padding: 10px;
`;

const FilterView = Styled.div`
display: flex;
align-items: center;
`;

const SpaceSpan = Styled.span`
    padding: 5px;
`;



export default FilterBar;