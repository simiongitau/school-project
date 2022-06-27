import React from 'react'
import styled from 'styled-components'
import Footer from '../footer/Footer';
export default function Login() {
    const Main=styled.div`
display:flex;
    `;
    const Light=styled.div`
flex:6;
height:62vh;
span{
    text-transform:uppercase;
}
div{
    display:flex;
    flex-direction:column;
    margin-top:10px;
    margin-bottom:20px;
    span{
        margin-bottom:20px;
        input{
            padding:5px;
            border-radius:20px;
            color:gray;
            border:1px solid gray;
            width:250px;
        };
    }
}
button{
    width:100px;
    padding:5px;
    border-radius:15px;
    margin-bottom:52px;
}
    `;
    const Email=styled.span`
        font-size:15px;
        text-transform:uppercase;
        margin-right:45px; 
      
    `;
    const Password=styled.span`
        font-size:15px;
        text-transform:uppercase;
        margin-right:12px; 
    
    `;
    const Right=styled.div`
    flex:6;
height:62vh;
span{
    text-transform:uppercase;
}
div{
    display:flex;
    flex-direction:column;
    margin-top:10px;
    margin-bottom:20px;
    span{
        margin-bottom:20px;
        input{
            padding:5px;
            border-radius:20px;
            color:gray;
            border:1px solid gray;
            width:250px;
        };
    }
}
button{
    width:100px;
    padding:5px;
    border-radius:15px;
}
    `;
    const Center=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    padding:50px;
    border-radius:20px;
    padding-bottom:100px;
    margin-left:4px;
    margin-right:4px;
    `;
    const Ema=styled.span`
        font-size:15px;
        text-transform:uppercase;
        margin-right:115px; 
      
    `;
    const Pass=styled.span`
        font-size:15px;
        text-transform:uppercase;
        margin-right:79px; 
    
    `;
    const Corn=styled.span`
        font-size:15px;
        text-transform:uppercase;
        margin-right:12px; 
    
    `;
  return (
      <>
    <Main>
        <Light>
{/* heading */}
<Center>
<span>login in</span>
<div>
    <span><Email>email:</Email><input placeholder='enter email address'/></span>
    <span><Password>password:</Password><input placeholder='enter password'/></span>
</div>
<button>send</button>
</Center>
        </Light>

    {/* registered section     */}
        <Right>
        <Center>
<span>register</span>
<div>
    <span><Ema>email:</Ema><input placeholder='enter email address'/></span>
    <span><Pass>password:</Pass><input placeholder='enter password'/></span>
    <span><Corn>confirm password:</Corn><input placeholder='confirm password'/></span>
</div> 
<button>send</button>
</Center>
        </Right>
        
    </Main>
    <Footer/>
    </>
  )
}
