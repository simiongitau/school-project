import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import gff from "../../assert/images (1).jpg";
export default function Detail() {
  const Container = styled.div`
    display: flex;
    height: 63vh;
  `;
  const Right = styled.div`
    flex: 6;
    div {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      p {
        text-align: justify;
        letter-space: 2px;
        margin-top: 10px;
        padding-bottom: 28px;
      }
      span {
        display: flex;
        justify-content: space-between;
        width: 400px;
        margin-left: 290px;
        button {
          width: 150px;
          padding: 8px;
          border-radius: 10px;
          outline: none;
          text-transform: uppercase;
        }
      }
    }
  `;
  const Light = styled.div`
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      span {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
        margin-top: 10px;
        width: 250px;
        margin-left: 30px;
      }
      img {
        width: 350px;
        height: 350px;
      }
    }
  `;
  return (
    <>
      <Container>
        <Light>
          <div>
            <img src={gff} alt="photos" />
            <span>
              <span>name:</span>
              <span>spinach</span>
            </span>
          </div>
        </Light>
        <Right>
          {/* <h1>good</h1>
            paragraph */}
          <div>
            <p className="font-light">
              coast farmcare agrovet, n.d.)Coast farmcare agrovet is an
              organization online web application for selling their products.
              This system is similar to mkulima young web application on
              focusing on agricultural product only. This system has payment
              method that is Mpesa. The system has cart module that enable
              customer to view accumulated products she/he is intending to place
              order .For the customer to complete ordering process he/she has to
              fill in delivery address .The system is also integrated with
              WhatsApp to enable instant communication between the customer and
              origination. The coast farmcare agrovet is attractive and well
              design this is by use of highly quality image and animation in
              addition to this, this application have product description that
              equip the customer with information about the product this feature
              is absent in mkulima young and jiji. One weakness of this system
              is present of two static page that is gallery page and contact us.
              2.2 Tool and methodology used in reviewing the systems Use case
              tool was used in determining weakness exist in jiji, mkulima young
              and coast farmcare agrovet this mechanisms involves defining the
              process that customer undertake while ordering products. One
              weakness of this tool is that it identify process weakness only
              but technical problem
            </p>
            <span>
              <button className="bg-[#f7fee7]">add to cart</button>
              <Link to="/">
                <button className="bg-[#f7fee7]">back</button>
              </Link>
            </span>
          </div>
          {/* back button */}
          {/* add to cart button */}
        </Right>
      </Container>
      <Footer />
    </>
  );
}
