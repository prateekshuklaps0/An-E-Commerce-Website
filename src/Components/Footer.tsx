import React from 'react'
import styled from 'styled-components'
import { TbWorld } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import footer_image from "../images/Modle-footer.jpg"
export const Footer = () => {
  return (
    <DIV>
      <div className='icon-container'>
        <div className='dark-icon'>
          <TbWorld className='icon-center' />
          <p>Fast and Secure Global Shipping</p>
        </div>
        <div className='dark-icon'>
          <GoGift className='icon-center' />
          <p>30 days return policy</p>
        </div>
        <div className='dark-icon'>
          <RiSecurePaymentFill className='icon-center' />
          <p>100% secure payments</p>
        </div>
      </div>
      <div className='main-container'>

        <div className='footer-container'>
          <div className='child-container'>
            <h6>Need assistance</h6>
            <p>FAQ</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>Content</p>
          </div>
          <div className='child-container'>
            <h6>The Company</h6>
            <p>About</p>
            <p>Responsibility</p>
            <p>Carrers</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
          </div >
          <div className='child-container'>
            <h6>Resources</h6>
            <p>Blog</p>
            <p>Shopping Guide</p>
            <p>Sizes</p>
          </div>
        </div>
        <div className='parent-image'>
          <div className='footer-image'>
            <h1>Find Store Near You</h1>
            <button>Find Now</button>
          </div>
        </div>

      </div>
      <div className='main-socail'>
        <div className='socail-media'>
          <AiOutlineFacebook />
          <AiFillTwitterSquare />
          <AiOutlineInstagram />
        </div>
        <div className='select-div'>
          <select >
            <option value="">Select a country</option>
            <option value="United States">United States ($)</option>
            <option value="United Kingdom">United Kingdom (£)</option>
            <option value="Canada">Canada ($)</option>
            <option value="Australia">Australia ($)</option>
            <option value="India">India (₹)</option>
          </select>

          <select >
            <option value="">Select a country</option>
            <option value="United States" >United States</option>
            <option value="United Kingdom" >United Kingdom</option>
            <option value="Canada" >Canada</option>
            <option value="Australia" >Australia</option>
            <option value="India">India</option>
          </select>
          <p>Copyright 2022 ofspace LLC.All Right</p>
        </div>
      </div>
    </DIV>
  )
}
const DIV = styled.footer`
 width: 100%;
  background-color: #000000;
  color: white;

  .icon-container {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }

  .dark-icon {
    height: 70px;
    text-align: center;
    border: 0.2px solid gray;
  }

  .icon-center {
    margin: 10px 15em;
  }

  .child-container {
    margin-left: 70px;
  }

  .footer-container {
    display: flex;
    width: 60%;
    padding: 20px;
    text-align: center;
    justify-content: space-between;
  }

  .footer-image {
    width: 100%;
    background-image: url(${footer_image});
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
  }

  h1 {
    font-size: xx-large;
    padding: 1%;
    width: 60%;
    margin: auto;
  }

  button {
    margin: 10px 200px;
    border: none;
    font-weight: 600;
    width: 136px;
    background-color: #fbc02d;
    height: 42px;
    font-size: x-large;
  }

  .main-container {
    width: 99%;
    display: flex;
  }

  .socail-media {
    width: 40%;
    justify-content: center;
    display: flex;
    padding: 20px;
    margin: auto;
  }

  .main-socail select {
    color: #000000;
    margin: 10px;
  }

  .select-div {
    width: 40%;
    justify-content: center;
    padding: 20px;
    margin: auto;
  }

  .parent-image {
    width: 30%;
    height: 70vh;
  }

  @media all and (min-width: 500px) and (max-width: 800px) {
    width: 100%;

    .icon-container {
       
    
    }

    .dark-icon {
      width: 28vh;
    }

    .main-container {
      flex-direction: column;
    }

    .footer-container {
      flex-wrap: wrap;
      justify-content: center;
    }

    .child-container {
      margin: 10px;
    }

    .parent-image {
      width: 100%;
    }
  }
`