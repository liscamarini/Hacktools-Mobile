import styled from 'styled-components/native';

export const Quiz = styled.View`
  padding: 16px;
  margin-top: 16px;
  height: 350px;
  width: 360px;
  border-width: 3px;
  border-radius: 10px;
  border-color: #650075;
  margin-left: 16px;
  background: #e0e3d4;
`;

export const Author = styled.Text`
  font-family: 'Gilroy-bold';
  color: #650075;
  font-size: 22px;
  text-align: center;
`;

export const Text = styled.Text`
  font-family: 'gilroy-regular';
  font-size: 16px;
  color: #10111e;
  margin-bottom: 8px;
`;

export const Questions = styled.Text`
  font-family: 'gilroy-heavy';
  font-size: 18px;
  color: #10111e;
`;
