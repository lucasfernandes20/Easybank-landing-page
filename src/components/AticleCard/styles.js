import styled from 'styled-components';

export const Div = styled.div`
  background-color: whitesmoke;
  width: 80%;
  margin: 40px auto;
  border-radius: 10px;
  padding-bottom: 30px;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Span = styled.span`
  color: hsl(233, 8%, 62%);
  font-size: 14px;
`;

export const H2 = styled.h2`
  font-weight: 300;
  font-size: 18px;
`;

export const P = styled.p`
  font-size: 14px;
  color: hsl(233, 8%, 62%);
  font-weight: 800;
`;

export const Content = styled.div`
  width: 90%;
  height: 150px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
