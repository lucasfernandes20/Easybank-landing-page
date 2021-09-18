import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  background-color: white;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media(min-width: 900px) {
    width: 80vw;
    margin: auto;
  }
`;

export const H1 = styled.h1`
  color: hsl(233, 26%, 24%);
  font-size: 30px;
  font-weight: 400;
  @media(min-width: 900px) {
    align-self: flex-start;
    font-size: 2.2vw;
  }
`;

export const Div = styled.div`
    @media(min-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
