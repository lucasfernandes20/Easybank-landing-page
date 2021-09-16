import React from 'react';
import PropTypes from 'prop-types';
import { Section, A, Button } from './styles';

const ModalContent = ({ close }) => (
  <Section>
    <Button type="button" onClick={() => close()}>
      <img style={{ backgroundColor: 'white' }} src="/easybank-landing-page-master/images/icon-close.svg" alt="x" />
    </Button>
    <A onClick={() => close()} href="#Home">Home</A>
    <A onClick={() => close()} href="#About">About</A>
    <A onClick={() => close()} href="#Intro">Contact</A>
    <A onClick={() => close()} href="#Blog">Blog</A>
    <A onClick={() => close()}>Careers</A>
  </Section>
);

ModalContent.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ModalContent;
