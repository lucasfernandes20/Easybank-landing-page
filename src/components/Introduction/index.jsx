import React from 'react';
import {
  Section, H1, Div, P, Button,
} from './styles';

const Introduction = () => (
  <Section>
    <Div>
      <H1>Next generation digital banking</H1>
      <P>
        Take your financial life online. Your Easybank account will be a one-stop-shop
        for spending, saving, budgeting, investing, and much more.
      </P>
      <Button type="button">
        Request Invite
      </Button>
    </Div>
  </Section>
);

export default Introduction;
