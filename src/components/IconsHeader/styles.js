import styled from 'styled-components';

export const Div = styled.div`
  width: 90vw;
  height: 60px;
  margin: 0 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(min-width: 900px) {
    width: 80vw;
    margin: 0 10vw;
  justify-content: space-between;

  }
`;

export const A = styled.a`
  color: black;
  text-decoration: none;
  margin-right: 25px;
  color: hsl(233, 8%, 62%);
  font-weight: 500;
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

`;

export const Nav = styled.nav`

`;
