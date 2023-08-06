// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import img4 from "../assets/img4.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  
  ${mobile({ display: "none" })}
`;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 50%;
  border-style: outset;
  border-radius:15px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 60px;
  
  
`;

const Title = styled.h1`
  font-size: 50px;
  color:lightgray;
  // display:flex;
  // justify-content: center;
  

  

`;



const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  cursor: pointer;
  color:lightgray;
  
  

`;

const Slider = () => {


  return (
    <Container style={{ backgroundImage:`url(${img4})`,
    backgroundPosition:'center',
    backgroundSize:'cover' ,backgroundRepeat:'no-repeat',
    width:"100%",height:"100%",objectFit:'cover'  }}>
    
      <Wrapper  >
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            
            
            <InfoContainer>
              <Title>{item.title}</Title>
              
              <Link to={'/product/'}>
              <Button >SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      
    </Container>
  );
};

export default Slider;