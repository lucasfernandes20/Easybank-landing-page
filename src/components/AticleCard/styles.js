import styled from 'styled-components';

export const Div = styled.div`
  background-color: whitesmoke;
  width: 80%;
  margin: 40px auto;
  border-radius: 10px;
  padding-bottom: 30px;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
  @media(min-width: 900px) {
    height: 22vw;
    flex-basis: 20%;
    border-radius: 5px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media(min-width: 900px) {
    width: 100%;
    display: flex;
    border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  }
`;

export const Span = styled.span`
  color: hsl(233, 8%, 62%);
  font-size: 14px;
  @media(min-width: 900px) {
    font-size: 0.7vw;
    display: flex;
  }
`;

export const H2 = styled.h2`
  font-weight: 300;
  font-size: 18px;
  @media(min-width: 900px) {
    font-size: 1vw;
    width: 80%;
    display: flex;
  }
`;

export const P = styled.p`
  font-size: 14px;
  color: hsl(233, 8%, 62%);
  font-weight: 800;
  @media(min-width: 900px) {
    font-size: 0.8vw;
    font-weight: 500;
    width: 80%;
    display: flex;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
