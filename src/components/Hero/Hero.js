import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Tomas Kuprinskas and I am junior full stack web developer, I
        have a passion for web development and I am currently working as a
        freelancer and I am always looking for new challenges and opportunities.
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            'https://tkuprinskas.lt/MyResume/Tomas%20Kuprinskas%20CV%20-%20Developer.pdf',
            '_blank'
          )
        }>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
