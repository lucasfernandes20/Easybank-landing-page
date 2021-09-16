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
`;

export const Div = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Img = styled.img`
  width: 25px;
`;

export const Logo = styled.img`
  fill: white;
  width: 140px;
`;

export const A = styled.a`
  color: white;
  text-decoration: none;
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
  padding: 12px 30px;
  font-weight: 900;
  font-weight: 800;
`;

export const P = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
`;
