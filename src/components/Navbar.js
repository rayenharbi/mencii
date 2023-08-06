import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined, Search} from '@material-ui/icons'
import logo1 from '../assets/logo1.png'
import { Badge } from '@material-ui/core';
import './LogoAnimation.css';
import { mobile } from './../responsive';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {useSelector} from "react-redux";




const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
  background-color:#212529;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  color:lightgray;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  color:lightgray;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor:pointer;
  
  
  ${mobile({ fontSize: "24px" })};
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  ${mobile({ flex: 2, justifyContent: "center" })}
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color:lightgray;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)

  
  return (
    <Container  >
   <Wrapper>
      <Left>
        <Language>EN</Language>
       
        </Left>
      <Center>
        <Link to= {'/'}>
        <Logo> <img src={logo1} style={{ width: '60px', height: 'auto'  }} alt=""/></Logo>
        </Link></Center>
      <Right>
        <Link to= {'/contact/'}>
        <MenuItem>Contact</MenuItem>
        </Link>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem>
        <Link to={"/cart"}>
        <Badge badgeContent={quantity} color='primary'>
          <ShoppingCartOutlined style={{color:'lightgray'}}/>
        </Badge>
        </Link>
        </MenuItem>
        </Right>
  </Wrapper>
  </Container>
  )
}

export default Navbar