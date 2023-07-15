import  styled  from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Add, Remove } from "@material-ui/icons";
import ProductSlider from '../components/ProductSlider';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img from '../assets/img.jpg'
import { mobile } from "../responsive";

import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
  cursor: pointer;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;



const Product = () => {


  const [quantity,setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();




  

const handleQuantity = (type) =>{
  if (type === "dec") {
   quantity >1 && setQuantity(quantity -1);
  
  }else {
    setQuantity(quantity + 1 );
  }
}
 const handleClick=() =>{
 dispatch(addProduct({product, quantity}));
  
 }
 

  const productImages = [
    img2,
    img3,
     img,
   ];
  return (
    
    <Container >
      <Navbar/>
      <Wrapper>
        
        <ImgContainer>
        <ProductSlider  images={productImages  }  style={{ BorderRadius:"15px" }}/>
        </ImgContainer>
        <InfoContainer>
          <Title> 
            T-shirt
          </Title>
          <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              v   nisi ut aliquip ex ea commodo consequat.
          </Desc>
          <Price>75DT</Price>
          <FilterContainer>
            <Filter>
            <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              </Filter>
              <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
                
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      <Footer />
      
    </Container>
  )
  }

export default Product