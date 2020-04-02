import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Styled from 'styled-components';

function AddPost({newPost, addPostData, postData, userConnect, funcOpenPost}){

    const [closeBtn, setCloseBtn] = useState("none");

    const [defaultTypePost, setDefaultTypePost ]= useState("Text");

    const [postTitle, setPostTitle] = useState("");
    const [textPostArea, setTextPostArea] = useState("");
    const [resumePostArea, setResumePostArea] = useState("");
    const [postImg, setPostImg] = useState("none");
    const [postVideo, setPostVideo] = useState("none");



    let optionValue = (event) => {
        console.log("hello option clicked:", event.target.value);
        return setDefaultTypePost(event.target.value)
    };

    let registerPostTitle = (event) => {
        setPostTitle(event.target.value)
    };


    let closeBtnAct = (event) =>{
        console.log("oyé closeBtnAct");
       if(event.target.value === "none"){
           console.log("oyé closeBtnAct if");
           setCloseBtn("block");
           funcOpenPost();

       }else{
           console.log("oyé closeBtnAct else");
           setCloseBtn("none");
           funcOpenPost();
       }
    };

    let registerPostArea = (event) => {
        console.log("registerPostArea called by onchange textarea");
        setTextPostArea(event.target.value);
    };

    let registerCommentArea = (event) => {
        console.log("registerCommentArea called by onchange comment textarea");
        setResumePostArea(event.target.value);
    };

    let registerPostImg = (event) => {
        console.log("image input value changed");
        setPostImg(event.target.files);
        console.log(event.target.file);
    };

    let registerPostVideo = (event) => {
        console.log("video input value changed");
        setPostVideo(event.target.files);
        console.log(event.target.file);
    };

    let generateId = () => {
        let newId = Math.floor(Math.random() * 10);
        for(const data of postData){
            while(data.postId === newId){
                newId = Math.floor(Math.random() * 10);
            }
        }
        return newId;
    };

    let registerPost = () => {
        console.log("userconnect value:", userConnect.connected);

        console.log("enter to registerPost, receved signale");
        if (defaultTypePost === "Text"){
            if(userConnect.connected === undefined){
                console.log("Enter to if connected test!");
                return <Redirect to="/login"/>;
            }
            let randomId = generateId();
            console.log("enter to registerPost if fonction, receved signale");
           let dataRegister = {
               "postId":randomId,
               "userPost": userConnect.pseudo,
               "groupPost": userConnect.jointGroup,
               "titlePost": postTitle,
               "postText": textPostArea,
               "postImg": "",
               "postVideo": "",
               "postComment": resumePostArea,
               "postType": defaultTypePost,
               "upVote": 0,
               "downVote": 0
           };
            addPostData(dataRegister);
            console.log("addPostData called by registerPost");
            funcOpenPost();
            console.log("close addPost after post send");
        }
    };


    return (
        <AddPostContent value={newPost}>
            <ButtonClose classeName="closedPost" value={closeBtn} onClick={closeBtnAct} onChange={closeBtnAct}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 294.843 294.843" height="20px" fill="#ff4500">
                    <g>
                        <path d="M147.421,0C66.133,0,0,66.133,0,147.421s66.133,147.421,147.421,147.421c38.287,0,74.567-14.609,102.159-41.136   c2.389-2.296,2.464-6.095,0.167-8.483c-2.295-2.388-6.093-2.464-8.483-0.167c-25.345,24.367-58.672,37.786-93.842,37.786   C72.75,282.843,12,222.093,12,147.421S72.75,12,147.421,12s135.421,60.75,135.421,135.421c0,16.842-3.052,33.273-9.071,48.835   c-1.195,3.091,0.341,6.565,3.432,7.761c3.092,1.193,6.565-0.341,7.761-3.432c6.555-16.949,9.879-34.836,9.879-53.165   C294.843,66.133,228.71,0,147.421,0z"/>
                        <path d="M167.619,160.134c-2.37-2.319-6.168-2.277-8.485,0.09c-2.318,2.368-2.277,6.167,0.09,8.485l47.236,46.236   c1.168,1.143,2.683,1.712,4.197,1.712c1.557,0,3.113-0.603,4.288-1.803c2.318-2.368,2.277-6.167-0.09-8.485L167.619,160.134z"/>
                        <path d="M125.178,133.663c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757c2.343-2.343,2.343-6.142,0-8.485   L88.428,79.942c-2.343-2.343-6.143-2.343-8.485,0c-2.343,2.343-2.343,6.142,0,8.485L125.178,133.663z"/>
                        <path d="M214.9,79.942c-2.343-2.343-6.143-2.343-8.485,0L79.942,206.415c-2.343,2.343-2.343,6.142,0,8.485   c1.171,1.171,2.707,1.757,4.243,1.757s3.071-0.586,4.243-1.757L214.9,88.428C217.243,86.084,217.243,82.286,214.9,79.942z"/>
                    </g>
                </svg>
            </ButtonClose>
            <TextH> ENTER NEW POST TO YOUR REDDIT </TextH>
            <AddPostForm>
                <PostType>
                    <SelectLabel htmlfor="postType"> Choose type of new post :  </SelectLabel>
                    <BoxSelect id="postType">
                        <option value="Text" onClick={optionValue} > Text </option>
                        <option value="Image" onClick={optionValue}> Image </option>
                        <option value="Video" onClick={optionValue}> Video </option>
                    </BoxSelect>
                </PostType>
                <BoxDiv>
                    <BoxInput type="text" name="titlePost" placeholder="Title of post" value={postTitle} onChange={registerPostTitle}/>
                </BoxDiv>
                <BoxDiv>
                    {
                        defaultTypePost.includes("Text") ? (<BoxText name="textPost" value={textPostArea} placeholder="Enter Your Post ..." onChange={registerPostArea}> </BoxText>) :
                            (defaultTypePost.includes("Image") ? (<BoxInput type="file" name="imagePost" onChange={registerPostImg}/>) :
                                (defaultTypePost.includes("Video") ? (<BoxInput type="file" name="videoPost" onChange={registerPostVideo}/>) : console.error("not defined typePost value !")))
                    }
                    <BoxComment name="commentPost" value={resumePostArea} placeholder="Enter Your comment's ..." onChange={registerCommentArea}> </BoxComment>
                </BoxDiv>
                <BoxDiv>
                    {
                        (newPost === "block")? (userConnect ? (<ButtonSubmit onClick={registerPost}>Submit</ButtonSubmit>) : (<Redirect to="/login"/>)) : (console.log("newPost never call: ", newPost))
                    }
                </BoxDiv>
            </AddPostForm>
        </AddPostContent>
    );
}

const AddPostContent = Styled.div(props => ({
    backgroundColor: "wheat",
    borderRadius: "34px",
    padding: "10px",
    margin: "8px",
    display: props.value
}));

const ButtonClose = Styled.button`
    background-color: transparent;
    border: none;
    align-self: center;
    align-content: center;
    display: grid;
`;

const TextH = Styled.h1`
    font-size: 20px;
    text-align: center;
    color: orangered;
    border: 1px solid #ff4500;
    border-radius: 10px;
`;

const AddPostForm = Styled.div`
    padding: 9px;
    border: 1px solid #ff4500;
    border-radius: 18px;
`;

const PostType = Styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-around;
    align-items: center;
`;

const SelectLabel = Styled.label`
`;

const BoxDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`;

const BoxInput = Styled.input`
    &::placeholder{
        text-align: center;
    }
`;

const BoxText = Styled.textarea`
    width: 263px;
    height: 163px;
    max-width: 328px;
    max-height: 163px;
    border-radius: 10px;
    border: none;
    padding: 15px;
    border: 1px solid black;
    &::placeholder{
        text-align: center;
    }
`;

const BoxComment = Styled.textarea`
    width: 263px;
    height: 18px;
    max-width: 328px;
    max-height: 18px;
    border-radius: 10px;
    border: none;
    padding: 15px;
    margin-top: 10px;
    border: 1px solid black;
    &::placeholder{
        text-align: center;
    }
`;

const BoxSelect = Styled.select`
    background-color: #ff4500;
    text-align: center;
    border: 1px solid #ff4500;
    padding: 5px;
    border-radius: 6px;
    color: white;
`;


const ButtonSubmit = Styled.button`
    text-align: center;
`;


export default AddPost;