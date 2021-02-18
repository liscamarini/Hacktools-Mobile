/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ ...rest }: InputProps) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <TextInput
        value={value}
        placeholderTextColor="#708090"
        onChangeText={text => {
          setValue(text);
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
