import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 680px;
  background: #e0e3d4;
  margin-left: 20px;
  margin-right: 20px;
  padding: 16px 32px 16px;

  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Gilroy-bold';
  color: #650075;
  font-size: 22px;
  margin-top: 16px;
`;

export const Label = styled.Text`
  font-family: 'gilroy-regular';
  color: #650075;
  font-size: 16px;
  margin-top: 16px;
`;

export const Question = styled.Text`
  font-family: 'gilroy-regular';
  color: #650075;
  font-size: 16px;
  margin-top: 10px;
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 280px;
  height: 40px;
  background: #650075;
  border-radius: 5px;
  margin-top: 16px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;
export const ButtonSendText = styled.Text`
  font-family: 'Gilroy-bold';
  color: #fff;
  font-size: 20px;
`;
