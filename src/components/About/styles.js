import styled from 'styled-components';

export const Section = styled.section`
  background-color: hsl(0, 0%, 98%);
  padding: 80px 0;
  @media(min-width: 900px) {
    width: 100vw;
  }
`;

export const Div = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 900px) {
    width: 80vw;
  }
`;

export const Cards = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  @media(min-width: 900px) {
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 900px) {
  width: 25%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  p {
    width: 70%;
  }
  }

`;

export const H1 = styled.h1`
  color: hsl(233, 26%, 24%);
  font-size: 35px;
  text-align: center;
  font-weight: 500;
  @media(min-width: 900px) {
    align-self: flex-start;
    font-size: 2.2vw;
  }
`;

export const P = styled.p`
  margin: 20px 0 40px 0;
  color: hsl(233, 8%, 62%);
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  @media(min-width: 900px) {
    align-self: flex-start;
    text-align: left;
    width: 40%;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const H2 = styled.h2`
  color: hsl(233, 26%, 24%);
  font-size: 25px;
  text-align: center;
  font-weight: 300;
`;

export const Img = styled.img`
  margin-bottom: 20px;
`;
