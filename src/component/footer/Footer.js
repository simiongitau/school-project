import React from "react";
import styled from "styled-components";
export default function Footer() {
  const Main = styled.div`
    background-color: rgba(0, 0, 0, 0.822);
    height: 30vh;
    color: white;
  `;
  const Container = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
    }
    span {
      text-transform: capitalize;
    }
  `;

  return (
    <Main>
      <Container>
        {/* div of social media */}
        <div className="text-sm font-bold text-green-100">
          <span className="cursor-pointer">
            <span>facebook</span>{" "}
            <span style={{ paddingLeft: "20px" }}>
              <i className="bi bi-facebook"></i>
            </span>
          </span>
          <span className="cursor-pointer">
            <span>instagram</span>{" "}
            <span style={{ paddingLeft: "15px" }}>
              <i className="bi bi-instagram"></i>
            </span>
          </span>
          <span className="cursor-pointer">
            <span>twitter</span>{" "}
            <span style={{ paddingLeft: "38px" }}>
              <i className="bi bi-twitter"></i>
            </span>
          </span>
          <span className="cursor-pointer">
            <span>youtube</span>{" "}
            <span style={{ paddingLeft: "27px" }}>
              <i className="bi bi-youtube"></i>
            </span>
          </span>
        </div>
        {/* div of of contact */}
        <div className="text-green-100 font-bold text-sm">
          <span>
            <i
              className="bi bi-telephone-fill"
              style={{ paddingRight: "3px" }}
            ></i>
            <span>telephone no:</span>{" "}
            <span>
              <i>0706692468</i>
            </span>
          </span>
          <span>
            <i className="bi bi-envelope" style={{ paddingRight: "3px" }}></i>
            <span>email:</span>
            <span>
              {" "}
              <i>eldoifo@gmail.com </i>
            </span>
          </span>
          <span>
            <i className="bi bi-mailbox" style={{ paddingRight: "3px" }}></i>
            <span>poster address:</span>{" "}
            <span style={{ paddingLeft: "3px" }}>
              <i>p.o box 1060 eldoret.</i>
            </span>
          </span>
          {/* <span><i classNameName="bi bi-facebook" style={{paddingRight:'3px'}}></i><span>yy</span> <span style={{paddingLeft:'3px'}}><i className="bi bi-facebook"></i></span></span>  */}
        </div>
      </Container>
      <div
        style={{ marginTop: "50px" }}
        className="text-green-100 font-bold text-sm flex justify-center items-center"
      >
        copyright 2022. eldo agrove limmited. all right reserved.
      </div>
    </Main>
  );
}
