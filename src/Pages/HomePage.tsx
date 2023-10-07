import React from "react";
import styled from "styled-components";
import shoes from "../images/shoes.png";
import Men from "../images/Men.png";
import Woman from "../images/woman.png";
import hoodies1 from "../images/tilt1.webp";
import hoodies2 from "../images/tilt2.webp";
import hoodies3 from "../images/tilt4.webp";
import groupPic from "../images/group.png";
import { Link } from "react-router-dom";
import ProductSlider from "../Elements/Sliders";
import { Footer } from "../Components/Footer";
const HomePage = () => {
  return (
    <DIV>
      <div className="word">
        <h1>Discover Rare,</h1>
        <h1>Playful Goods.</h1>
      </div>

      <p>
        Bitski connect communities,creators and brands through unique,ownable
        digital content.This is how the metaverse begins.
      </p>
      <button>Shop Now</button>
      <div className="image-handle">
        <img src={Men} alt="Men-wears" />
        <img src={Woman} alt="Woman-wears" />
        <img src={shoes} alt="shoes-wear" />
      </div>
      <div className="product-style">
        <h1>P</h1>
        <h1>R</h1>
        <h1>O</h1>
        <h1>D</h1>
        <h1>U</h1>
        <h1>C</h1>
        <h1>T</h1>
        <h1>S</h1>
      </div>
      <div className="space-conatiner">
        <div>
          <div className="strokeme">
            <p>We believe that </p>
            <p>Rare and Retro Stuff</p>
            <p>represents an individual's lifstyles.</p>
          </div>
          <div className="browse">
            <p>Browse Link 👇</p>
            <Link to="/products/men">
              <p>Mens's Fasion </p>
            </Link>
            <Link to="/products/women">
              <p>Woman's Fasion </p>
            </Link>
            <Link to="/products/kids">
              <p>Kid's collection </p>
            </Link>
            <Link to="/products/sneakers">
              <p> Sneakers </p>
            </Link>
            <button>Shop Men</button>
          </div>
        </div>

        <div className="container-image">
          <div className="tilt-container">
            <img src={hoodies1} alt="hoodies-1" className="tilt-element" />
            <p>Men Full Sleeve Printed Hoodie</p>
            <p>Price:₹900</p>
          </div>
          <div className="tilt-container">
            <img src={hoodies2} alt="hoodies-1" className="tilt-element" />
            <p>Men Full Sleeve Printed Hoodie</p>
            <p>Price:₹1100</p>
          </div>
          <div className="tilt-container">
            <img src={hoodies3} alt="hoodies-1" className="tilt-element" />
            <p>Men Full Sleeve Printed Hoodie</p>
            <p>Price:₹1500</p>
          </div>
        </div>
      </div>
      <div className="est-style">
        <h1>E</h1>
        <h1>N</h1>
        <h1>T</h1>
        <h1>I</h1>
        <h1>A</h1>
        <h1>L</h1>
        <h1>S</h1>
        <h1>S</h1>
        <h1>T</h1>
      </div>
      <div className="containers">
        <h1>For your esstentails style. </h1>
        <p>
          Beyond the frame of uniform in the new normal era. wear your own
          appearance and will,no matter the situation or the difficult.{" "}
        </p>
        <ProductSlider />
        <div className="style-word">
          <p className="li">New exciting drops </p>
          <p className="li">coming following month.</p>
        </div>
        <div className="main-container">
          <div className="paragraph">
            <h1>Subscribe to the newsletter</h1>
            <p>
              There is always new drops comings.These products are very premium
              and limited.If you want to put your hands on the forms
              first,subscribes to our newsletter.
            </p>
          </div>
          <div className="paragraph">
            <h1>New arrivals in every two months</h1>
            <p>
              There is always new drops cominggs in every two months. These
              products are very premium and limited. if you want to put your
              hands on them first.
            </p>
          </div>
        </div>
        <div className="input-with-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DQMf_nk3wuK7BKq0TrFIHbZFALMNfgr8XT1TteGKrw&usqp=CAU&ec=48600112"
            alt="Logo"
            className="logo"
          />
          <input
            type="text"
            placeholder="name@gmail.com"
            className="input-logo"
          />
        </div>
        <img src={groupPic} alt="group-pic" className="group-pic" />
      </div>

      <Footer />
    </DIV>
  );
};

export default HomePage;

const DIV = styled.div`
  padding: 15px;
  text-align: center;
  background: rgb(44, 44, 46);
  background: radial-gradient(
    circle,
    rgba(44, 44, 46, 1) 0%,
    rgba(0, 1, 5, 0.7932422969187676) 100%
  );

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  h1 {
    font-size: xx-large;
    color: white;
    font-weight: 900;
  }
  button {
    margin: 10px;
    border: none;
    font-weight: 600;
    width: 136px;
    background-color: #fbc02d;
    height: 42px;
    font-size: x-large;
  }
  p {
    font-size: larger;
    font-weight: 500;
    color: gray;
  }
  .image-handle {
    display: flex;
    width: 80%;
    margin: auto;

    justify-content: space-between;
  }
  .image-handle img {
    margin: 10px;
    width: 150px;
  }

  .product-style {
    display: flex;
    margin: 15px;
    border: 1px solid #dae23b;
    padding: 0px 15px;
    background-color: #131212;
    justify-content: space-between;
  }
  .product-style h1 {
    font-size: 200px;
    color: #131212;
    background-color: #131212;
    text-shadow: -1px -1px 0 #dae23b, 1px -1px 0 #dae23b, -1px 1px 0 #dae23b,
      1px 1px 0 #dae23b;
  }
  .strokeme {
    color: white;
    width: 400px;
    margin-left: 3em;
    text-align: left;
    font-size: xx-large;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }

  .word {
    margin: 45px;
  }

  .tilt-container {
    width: 250px;
    background-color: #131212;
    transform: rotateX(20deg) rotateY(20deg);
    border: 1px solid;
  }

  .tilt-element {
    width: 100%;
    height: auto;
    background-color: #e68320; /* Set the desired background color */
    display: inline-block; /* Ensure the container wraps around the image */
    padding: 10px;
    transition: transform 0.3s ease;
  }

  .tilt-element:hover {
    transform: none;
  }

  .container-image {
    display: flex;

    justify-content: space-evenly;
  }
  .space-conatiner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 30px;
    padding: 20px;

    justify-content: space-between;
  }
  .browse {
    margin: 1em;
    width: 59%;
    margin-left: 6px;
  }
  .est-style {
    display: flex;
    border: 1px solid #d1481b;
    border: 1 px solid;
    padding: 0px 15px;
    background-color: #131212;
    justify-content: space-between;
  }
  .est-style h1 {
    font-size: 200px;
    color: #131212;
    background-color: #131212;
    text-shadow: -1px -1px 0 #d1481b, 1px -1px 0#d1481b, -1px 1px 0 #d1481b,
      1px 1px 0 #d1481b;
  }
  .style-word .li {
    font-size: 50px;
    width: 45%;
    color: #ffffff;
    text-shadow: -1px -1px 0 #000000, 1px -1px 0#000000, -1px 1px 0 #000000,
      1px 1px 0 #000000;
  }
  .paragraph {
    width: 440px;
    background-color: #fefde3;
    margin: 10px;
    padding: 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .paragraph h1 {
    font-size: 25px;
  }
  .main-container {
    display: flex;
    margin-left: 3em;
    width: 70%;
    justify-content: space-between;
  }
  .input-with-logo {
    position: relative;
    width: 400px;
    margin-right: 969px;
    display: inline-block;
    margin-top: 20px;
  }

  .input-with-logo .logo {
    position: absolute;
    right: 5px; /* Adjust this value to align the logo as per your preference */
    top: 50%;

    width: 20px;
    transform: translateY(-50%);
  }
  .input-logo {
    height: 50px;

    width: 400px;
  }
  .input-with-logo input {
    padding-left: 30px; /* Adjust this value based on the logo's size */
  }

  .group-pic {
    margin-top: 10px;
    width: 100%;
  }

  @media (max-width: 800px) {
    .image-handle {
      display: grid;
      width: 80%;
      grid-template-columns: repeat(1, fr);
      justify-content: center;
    }
    .image-handle img {
      margin: 10px;
      width: 150px;
    }
    .product-style h1 {
      display: none;
    }
    .est-style h1 {
      font-size: 20px;
    }
    .space-conatiner {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    }
    .container-image {
      display: grid;
      grid-template-columns: repeat(1, fr);
      justify-content: center;
    }
    .browse {
      margin: 1em;
      width: 59%;
      margin-left: 90px;
    }
    .strokeme {
      margin-left: 6em;
    }
    .main-container {
      display: grid;
      grid-template-columns: repeat(1, fr);
    }
  }
  .containers {
    padding: 10px;
    background-color: #e0e0e0;
  }
  .containers p {
    margin-left: 30px;
    text-align: left;
    text-align: left;
  }
  .containers h1 {
    width: 500px;
    margin-left: 30px;
    text-align: left;
    font-weight: 600;
    color: #000;
  }
`;
