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
  :hover {
    cursor: pointer;
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
    `;

export const Nav = styled.nav`
`;
