import React, {useState} from 'react';
import Styled from 'styled-components';
import ViewBackground from '../../images/login.jpg'

function LogIn(props){
    console.log(props);
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    let setEnteredUsername = (event) => {
        setUsername(event.target.value);
    };

    let setEnteredPassword = (event) => {
        setPassword(event.target.value);
    };

    let setConnect = () => {
      if(!props.loginStatus){
          console.log("if value login status " + props.loginStatus);
          props.funcStatusLogin(username, password);
      }else{
          console.log("else value login status " + props.loginStatus);
          console.warn("user already connected !");
      }
    };

    return (
        <LogContent>
            <LogView> </LogView>
            <LogForm>
                <LogH1>SIGN IN</LogH1>
                <LogInput value={username} onChange={setEnteredUsername} type="text" name="username" placeholder="USERNAME"/>
                <LogInput value={password} onChange={setEnteredPassword} type="password" name="password" placeholder="PASSWORD"/>
                <LogButton onClick={setConnect} type="submit">SIGN IN</LogButton>
            </LogForm>
            <LogForget>
                <LogLink href="#">Forgot Username</LogLink>
                <span> . </span>
                <LogLink href="#">Forgot password</LogLink>
            </LogForget>
            <LogNewUser>
                <LogH3>New to Reddit ? <LogLink href="#">SIGN UP</LogLink></LogH3>
            </LogNewUser>

        </LogContent>
    );
}

const LogContent = Styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 100vw;
    height: 100vh;
`;

const LogView = Styled.div`
    background-image : url(${ViewBackground});
    background-position: center;
    background-size: contain;
    width: 90%;
    height: 30%;
    background-repeat: no-repeat;
`;

const LogForm = Styled.div`
    display: inline-grid;
    justify-content: center;
    align-items: center;
    grid-gap: 14px;
    padding: 11px;
    text-align: center;
`;

const LogForget = Styled.div`
    padding: 40px;
`;

const LogNewUser = Styled.div`
`;

const LogLink = Styled.a`
    text-decoration: none;
    color: #ff4500;
`;

const LogH3 = Styled.h3`
`;

const LogH1 = Styled.h1`
    color: #ff4500;
`;

const LogInput = Styled.input`
    text-align: center;
    &:focus {
        outline: none;
    }
`;

const LogButton = Styled.button`
    background-color: #ff4500;
    color: white;
    border : none;
    border-radius : 5px;
    padding: 10px;
    width: 60%;
    justify-self: center;
    &:active{
        background-color: gray;
        color: black;
    }
`;

export default LogIn;