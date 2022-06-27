import React from 'react'
import styled from "styled-components"
export default function Analysis() {
    const Container=styled.div`
    `;
    const Top=styled.div`
    display:flex;
    justify-content:space-between;
    padding-left:150px;
    padding-right:150px;
    padding-top:25px;
    div{
        height:80px;
        width:190px;
        background-color:rgba(243, 241, 227, 0.658);
        border-radius:20px;
        border:1px solid gray;
        padding:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        span{
            font-size:15px;
            text-transform:uppercase;
        };
        h3{
            padding-top:22px;
        }

    }
    
    `;
    // const Fig=styled.h3`
    // margin:left:0px;
    // `;

  return (
    <Container>
        <Top>
            <div><span>revenue generated</span><h3>56,000ksh</h3></div>
            <div><span>total sales</span><h3>230,000ksh</h3></div>
        </Top>
    </Container>
  )
}
