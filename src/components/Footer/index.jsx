import React from 'react';
import {
  Div, FooterSection, Logo, A, Button, P, Img,
} from './styles';

const Footer = () => (
  <FooterSection id="Support">
    <Logo src="/easybank-landing-page-master/images/logo.svg" alt="Logo" />
    <Div>
      <Img src="/easybank-landing-page-master/images/icon-facebook.svg" alt="Facebook icon" />
      <Img src="/easybank-landing-page-master/images/icon-youtube.svg" alt="Youtube icon" />
      <Img src="/easybank-landing-page-master/images/icon-twitter.svg" alt="Twitter icon" />
      <Img src="/easybank-landing-page-master/images/icon-pinterest.svg" alt="Pinterest icon" />
      <Img src="/easybank-landing-page-master/images/icon-instagram.svg" alt="Instagram icon" />
    </Div>
    <A href="#About">About Us</A>
    <A href="#Intro">Contact</A>
    <A href="#Blog">Blog</A>
    <A>Careers</A>
    <A href="#Support">Support</A>
    <A>Privacy Policy</A>
    <Button type="button">
      Request Invite
    </Button>
    <P>© Easybank. All Rights Reserved</P>
  </FooterSection>
);

export default Footer;
