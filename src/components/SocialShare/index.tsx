import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container, Title, IconsContainer } from './styles';

const socialMediaIcons = ['instagram', 'facebook-square', 'twitter', 'linkedin-square'];

const SocialShare: React.FC = () => (
  <Container>
    <Title>Share our content on:</Title>
    <IconsContainer>
      {socialMediaIcons.map((socialMedia) => <AntDesign key={socialMedia} name={socialMedia} size={20} color="black" style={{ marginHorizontal: 5 }} />)}
    </IconsContainer>
  </Container>
);

export default SocialShare;
