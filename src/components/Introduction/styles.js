import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  height: 30vh;
  margin-bottom: 120px;
  @media(min-width: 900px) {
    order: 0;
    width: 50vw;
    height: 36vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const H1 = styled.h1`
  color: hsl(233, 26%, 24%);
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  @media(min-width: 900px) {
    font-size: 3.5vw;
    text-align: left;
  }
`;

export const Div = styled.div`
  width: 330px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(min-width: 900px) {
    width: 60%;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const P = styled.p`
  margin: 20px 0;
  color: hsl(233, 8%, 62%);
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  @media(min-width: 900px) {
    font-size: 1.4vw;
    text-align: left;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  color: white;
  border-radius: 100px;
  padding: 10px 30px;
  font-weight: 900;
  position: relative;
  background-image: linear-gradient(
    to right,
    hsl(136, 65%, 51%), 
    hsl(192, 70%, 51%)
  );
  z-index: 1;
  cursor: pointer;
  ::before {
    position: absolute;
  border-radius: 100px;
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to right,
    hsl(192, 70%, 51%),
    hsl(136, 65%, 51%)
  );
  z-index: -1;
  transition: opacity 0.4s linear;
  opacity: 0;
  }
  :hover::before {
    opacity: 1;
  }
  @media(min-width: 900px) {
    font-size: 1.3vw;
  }
  
`;
