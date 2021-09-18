import styled from 'styled-components';

export const Section = styled.section`
  background-image: url('/easybank-landing-page-master/images/bg-intro-mobile.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -40px;
  width: 100vw;
  height: 320px;
  @media(min-width: 900px) {
    background-image: url('/easybank-landing-page-master/images/bg-intro-desktop.svg');
    height: 36vw;
    width: 50vw;
    background-position: -4vw -16vw;
    background-repeat: no-repeat;
    background-size: 70vw;
    display: flex;
    justify-content: flex-end;
    order: 1;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 95%;
  @media(min-width: 900px) {
    width: 45vw;
    height: 45vw;
    margin: auto;
    object-position: 7vw -10vw;
    position: absolute;
  }
`;
