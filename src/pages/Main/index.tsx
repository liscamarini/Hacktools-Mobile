/* eslint-disable no-console */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react';
import { Text } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import PopupQuiz, { handleModalQuiz } from '../../components/Modals/PopupQuiz';

import {
  ButtonText,
  Container,
  Title,
  Button,
  ButtonLocation,
  Subtitle,
  ButtonLocationText,
} from './style';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const modalRefQuiz = useRef<handleModalQuiz>(null);

  const handleOpenModalQuiz = useCallback(() => {
    modalRefQuiz.current?.openModalQuiz();
  }, []);

  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      pos => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      e => setError(e.message),
    );
  }, []);

  return (
    <>
      <Header title="Cadastro de Questionários" subtitle="Laís Camarini" />
      <LinearGradient
        start={{ x: 0, y: 1.5 }}
        end={{ x: 1, y: 1.0 }}
        colors={['#620172', '#7d3889', '#ccadcf']}
        style={{
          alignSelf: 'stretch',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Container>
          <Title>
            Verifique sua Geolocalização para acessar o Questionário.
          </Title>

          <ButtonLocation onPress={getPosition}>
            <ButtonLocationText>Sua Localização</ButtonLocationText>
            <Icon name="gps-fixed" size={26} color="#efe0ff" />
          </ButtonLocation>
          {error ? (
            <Text>Error retrieving current position</Text>
          ) : (
            <>
              <Subtitle>
                Latitude:
                {position.latitude}
              </Subtitle>
              <Subtitle>
                Longitude:
                {position.longitude}
              </Subtitle>
            </>
          )}

          <Button onPress={handleOpenModalQuiz}>
            <ButtonText>Questionário</ButtonText>
            <PopupQuiz ref={modalRefQuiz} />
          </Button>

          <Button onPress={() => navigation.navigate('Registered')}>
            <ButtonText>Cadastrados</ButtonText>
          </Button>
        </Container>
      </LinearGradient>
    </>
  );
};

export default Main;
