/* eslint-disable react/require-default-props */
import React from 'react';
import Logo from '../../assets/logo.png';
import { Container, Image, Subtitle, Title } from './style';

interface HeaderProps {
  title: string;
  subtitle?: string;
}
const Header: React.FC<HeaderProps> = ({ title, subtitle }: HeaderProps) => {
  return (
    <Container>
      <Image source={Logo} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Header;
