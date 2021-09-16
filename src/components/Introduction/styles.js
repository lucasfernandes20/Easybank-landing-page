import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  height: 30vh;
  margin-bottom: 120px;
`;

export const H1 = styled.h1`
  color: hsl(233, 26%, 24%);
  font-size: 40px;
  text-align: center;
  font-weight: 400;

`;

export const Div = styled.div`
  width: 330px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const P = styled.p`
  margin: 20px 0;
  color: hsl(233, 8%, 62%);
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export const Button = styled.button`
  background-color: hsl(136, 65%, 51%);
  background: 
    linear-gradient( 90deg,
            hsl(136, 65%, 51%), 
            hsl(192, 70%, 51%)
          );
  color: white;
  border-radius: 100px;
  padding: 10px 30px;
  font-weight: 900;
  font-weight: 800;

`;
