import React from 'react'
import styled from 'styled-components'

export default function Login() {
    const Main=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:70vh;
    width:100%;
    `;
    const Container=styled.div`
    border-radius:12px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:5px;
    background-color:rgba(159, 184, 231, 0.63);
    height:40vh;
    width:70vh;
    input{
        padding:10px;
        margin-bottom:20px;
        margin-left:10px;
        width:50%;
        border-radius:10px;
        border:none;
        font-weight:100;
    }
    button{
        width:130px;
        padding:10px;
        margin-left:30%;
        cursor:pointer;
        border-radius:20px;
    }
    `;
  return (
      <>
    <Main>
        <Container>
            <span><span style={{marginRight:"30px"}}>email:</span><input placeholder='enter email'/></span>
            <span><span>password:</span><input placeholder='enter password'/></span>
            <button>send</button>
        </Container>

    </Main></>
  )
}
