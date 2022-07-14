import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
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
  background-color: #${(props) => props.color};
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
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  border-radius: 10px;
  border: 2px solid transparent;
  width: 30px;
  height: 30px;
  margin: 0px 5px;
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BorderGradient = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  margin: -2px;
  background-image: linear-gradient(to right top, #00f260 0%, #0575e6 100%);
  border-radius: inherit;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right bottom,
    #00f260 0%,
    #0575e6 100%
  );
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/df015353-8c8e-4441-b54b-2b267a4528f7/ajko-1-white-and-black-do5047-100-release-date.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>AJKO 1 White and Black</Title>
          <Desc>
            Turn heads in the AJKO 1. Without giving away any design secrets (we
            like a little mystery), it repackages MJ's first icon using a mix of
            synthetic leather and canvas. With a decidedly relaxed look, fresh
            black-and-white colour theme and connection to the '85 original,
            these kicks will earn nods of approval from long-time fans and
            brand-new sneakerheads alike.
          </Desc>
          <Price>$199</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor color="000" />
              <FilterColor color="ccc" />
              <FilterColor color="D3C5B0" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption>39</FilterSizeOption>
                <FilterSizeOption>40</FilterSizeOption>
                <FilterSizeOption>41</FilterSizeOption>
                <FilterSizeOption>42</FilterSizeOption>
                <FilterSizeOption>43</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>
                1<BorderGradient></BorderGradient>
              </Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
