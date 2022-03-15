import React from 'react';
import { DiAndroid, DiDotnet, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of technologies spanning across web, mobile and desktop environments. Always looking to learn new things!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Fullstack</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Next.js Front-End <br />
            As well as <br />
            Django and PostGreSQL Back-End
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size='3rem'/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java and Kotlin development <br />
            As well as learning <br />
            React Native framework for mobile apps <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDotnet size='3rem'/>
        <ListContainer>
          <ListTitle>Desktop</ListTitle>
          <ListParagraph>
            Experience with <br />
            .NET Application development <br />
            As well as <br />
            Java Application development
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
