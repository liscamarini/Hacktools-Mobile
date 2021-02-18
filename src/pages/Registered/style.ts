import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: 'Gilroy-bold';
  color: #650075;
  font-size: 22px;
  text-align: center;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #650075;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
`;
export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ButtonBackText = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 16px;
  color: #e0e3d4;
  top: 5px;
  left: 10px;
  text-decoration: underline;
`;
