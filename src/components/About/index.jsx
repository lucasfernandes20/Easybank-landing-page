import React from 'react';
import {
  Section, H1, P, H2, Div, Img,
} from './styles';

const About = () => (
  <Section>
    <Div>
      <H1>Why choose Easybank?</H1>
      <P>
        We leverage Open Banking to turn your bank account into your financial hub. Control
        your finances like never before.
      </P>
      <Img src="/easybank-landing-page-master/images/icon-online.svg" alt="online" />
      <H2>Online Banking</H2>
      <P>
        Our modern web and mobile applications allow you to keep track of your finances
        wherever you are in the world.
      </P>
      <Img src="/easybank-landing-page-master/images/icon-budgeting.svg" alt="online" />
      <H2>Simple Budgeting</H2>
      <P>
        See exactly where your money goes each month. Receive notifications when you’re
        close to hitting your limits.
      </P>
      <Img src="/easybank-landing-page-master/images/icon-onboarding.svg" alt="online" />
      <H2>Fast Onboarding</H2>
      <P>
        We don’t do branches. Open your account in minutes online and start taking control
        of your finances right away.
      </P>
      <Img src="/easybank-landing-page-master/images/icon-api.svg" alt="online" />
      <H2>Open API</H2>
      <P>
        Manage your savings, investments, pension, and much more from one account. Tracking
        your money has never been easier.
      </P>
    </Div>
  </Section>
);

export default About;
