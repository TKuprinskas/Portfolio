import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have experience working with the following technologies:</SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML5 <br />
            JavaScript <br />
            React.js <br />
            Next.js <br />
            TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express.js <br />
            MySQL <br />
            MongoDB <br />
            PostGreSQL <br />
            Sanity CMS <br />
            Google Cloud Services
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Styling</ListTitle>
          <ListParagraph>
            CSS <br />
            SCSS <br />
            Styled Components <br />
            Material UI <br />
            Tailwind CSS <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
