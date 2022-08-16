import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My name is Tomas Kuprinskas and I am junior full stack web developer, I
        have a passion for web development and I am currently working on my main
        project which is related to my hobbies.
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://tkuprinskas.lt/MyResume/Tomas%20Kuprinskas%20CV.pdf",
            "_blank"
          )
        }
      >
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
