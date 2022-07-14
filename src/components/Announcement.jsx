import styled from "styled-components";
const Container = styled.div`
  height: 30px;
  background: linear-gradient(to right, #00f260 0%, #0575e6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
