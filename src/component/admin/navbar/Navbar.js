import React from 'react'
import styled from "styled-components"
export default function Navbar() {
    const Wrapper=styled.div`
    background-color:rgba(248, 198, 241, 0.651);
    height:15vh;
    display:flex;
    justify-content:center;
    align-items:center;
    div{
        span{
            font-size:25px;
            text-transform:uppercase;
        }
    }

    `;
  return (
    <Wrapper>
        <div><span>eldo agrovet dashbord</span></div>
    </Wrapper>
  )
}
