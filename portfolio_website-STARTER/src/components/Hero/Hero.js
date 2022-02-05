import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a software engineer based in Ottawa, Canada. I have a strong passion for building applications for web, mobile, and desktop environments, with a side of video editing and audio engineering. <br/> 
      <a href='#contact'>Let's make something cool! </a>
      </SectionText>
    </LeftSection>
  </Section>

);

export default Hero;