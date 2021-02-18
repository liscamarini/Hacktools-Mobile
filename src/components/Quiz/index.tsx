/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import {
  Container,
  ButtonSend,
  ButtonSendText,
  Question,
  Title,
  Label,
} from './styles';

import Input from '../Input';

const Quiz: React.FC = () => {
  const loginValidationSchema = yup.object().shape({
    name: yup.string().required('Nome Obrigatório'),
    email: yup
      .string()
      .email('Entre com um email válido')
      .required('Email  Obrigatório'),
    question: yup.string().required('Resposta Obrigatória'),
    question2: yup.string().required('Resposta Obrigatória'),
    question3: yup.string().required('Resposta Obrigatória'),
  });

  return (
    <Container>
      <Title>Quiz - Lorem Ipsum</Title>
      <ScrollView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            name: '',
            email: '',
            cpf: '',
            phone: '',
            question: '',
            question2: '',
            question3: '',
          }}
          onSubmit={values => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Label>Nome*</Label>
              <Input
                name="nome"
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect
                placeholder="Nome Completo"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {errors.name && (
                <Text style={{ fontSize: 12, color: 'red' }}>
                  {errors.name}
                </Text>
              )}

              <Label>Email*</Label>
              <Input
                name="email"
                keyboardType="email-address"
                autoCorrect={false}
                placeholder="email@email.com"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={{ fontSize: 12, color: 'red' }}>
                  {errors.email}
                </Text>
              )}

              <Title>Perguntas:</Title>
              <Question>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit?*
              </Question>
              <Input
                name="question"
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect
                onChangeText={handleChange('question')}
                onBlur={handleBlur('question')}
                value={values.question}
              />
              {errors.question && (
                <Text style={{ fontSize: 12, color: 'red' }}>
                  {errors.question}
                </Text>
              )}
              <Question>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit?*
              </Question>
              <Input
                name="question"
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect
                onChangeText={handleChange('question2')}
                onBlur={handleBlur('question2')}
                value={values.question2}
              />
              {errors.question2 && (
                <Text style={{ fontSize: 12, color: 'red' }}>
                  {errors.question2}
                </Text>
              )}
              <Question>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit?*
              </Question>
              <Input
                name="question"
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect
                onChangeText={handleChange('question3')}
                onBlur={handleBlur('question3')}
                value={values.question3}
              />
              {errors.question3 && (
                <Text style={{ fontSize: 12, color: 'red' }}>
                  {errors.question3}
                </Text>
              )}
              <ButtonSend onPress={handleSubmit}>
                <ButtonSendText>Cadastrar</ButtonSendText>
              </ButtonSend>
            </>
          )}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default Quiz;
