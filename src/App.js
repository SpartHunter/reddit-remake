import React, {useState} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Styled from 'styled-components';
import Header from './components/header/header.component';
import Logo from './images/reddit.png';
import Pubs from './components/advertising/pub.component';
import FilterBar from "./components/filterBar/filterBar.component";
import UserPost from './components/userPost/userPost.component';
import AddPost from './components/addPost/addPost.component';
import LogIn from  './components/login/login.component';
import userData from './Data/user.json';
import AllPost from './Data/post.json'



function App() {
    const [openAddPost, setOpenAddPost] = useState("none");
    const [logInStatus, setLogInStatus] = useState(false);
    const [userConnect, setUserConnect] = useState(false);
    const [PostData, setPostData] = useState(AllPost);


    let changeOpenPost = () => {
        console.log("changed calling");
        if(openAddPost === "none"){
            setOpenAddPost("block");
        }else{
            setOpenAddPost("none");
        }
    };

    let statusLogin = (username, password) => {
        console.log("userData length:" + userData.length);
        for(let i=0; i < userData.length; i++){
            console.log("boucle status number: " + i);
            if(userData[i].pseudo === username && userData[i].password === password){
                console.log("if of status login valid !");
                userData[i].connected = true;
                setUserConnect(userData[i]);
                console.log(userData[i]);
                setLogInStatus(true);
            } else{
                console.log("else of status login valid !");
            }
        }
    };

    let addPostData = (dataAdded) => {
        console.log("enter to addPostData, receved signale");
        return setPostData([...PostData, dataAdded]);
    };


    return (
        <AppComponent className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <Header newPost={openAddPost} funcOpenPost={changeOpenPost} logInStatus={logInStatus} logo={Logo}/>
                    <AddPost newPost={openAddPost} addPostData={addPostData} userConnect={userConnect} funcOpenPost={changeOpenPost}/>
                    <Pubs/>
                    <FilterBar/>
                    <UserPost postData={PostData} userConnect={userConnect}/>
                </Route>
                <Route exact path="/login" render={() => (
                    logInStatus ? (<Redirect to="/"/>) : (<LogIn loginStatus={logInStatus} funcStatusLogin={statusLogin}/>)
                )}/>
            </BrowserRouter>
        </AppComponent>
    );
}

const  AppComponent = Styled.div`
`;

export default App;
