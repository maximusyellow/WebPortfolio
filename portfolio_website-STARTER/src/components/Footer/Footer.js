import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaSoundcloud } from 'react-icons/fa'
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+1(905)-717-6558">+1 (905)-717-6558</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tair.farid@gmail.com">tair.farid@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Site development was done with the help of JavaScript Mastery courses</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/maximusyellow">
        <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/tairnuriev/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://youtube.com/channel/UCL4s8hQajwhcYs1S04A3ebg">
          <AiFillYoutube size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://soundcloud.com/tair-nuriev/popular-tracks">
          <FaSoundcloud size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
