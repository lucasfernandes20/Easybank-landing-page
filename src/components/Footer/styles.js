import styled from 'styled-components';

export const FooterSection = styled.footer`
  width: 100vw;
  height: 500px;
  background-color: hsl(233, 26%, 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
  @media(min-width: 900px){
  flex-direction: row;
  height: 300px;
  padding: 0;
  justify-content: flex-start;
  }
`;

export const Div = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100vw;
    height: 100%;
  @media(min-width: 900px){
    height: ${(props) => (props.Link ? '40%' : '100%')};
    width: ${(props) => (props.Link ? '20%' : '25%')};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 50px;
    justify-content: center;
    margin-left: 2vw;
    :nth-child(3) {
    right: 50px;
    height: 300px;
    position: absolute;
  }
  }
`;

export const Img = styled.img`
  width: 25px;
  margin: 5px 3px;
  @media(min-width: 900px){
    width: 40px;
    margin-right: 10px;
  }
`;

export const Logo = styled.img`
  fill: white;
  width: 140px;
  @media(min-width: 900px){
    width: 200px;
    margin-right: 20px;
  }
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  @media(min-width: 900px){
    align-self: flex-start;
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
  @media(min-width: 900px){
  font-size: 20px;
  }
`;

export const P = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;
