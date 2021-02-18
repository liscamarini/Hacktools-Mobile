import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Registereds from '../../components/Registered';

import { ButtonBack, ButtonBackText, Footer } from './style';

const Registered: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title="Exemplo dos Questionários Cadastrados." />
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <Registereds name="Laís Camarini" email="lais@email.com" />
          <Registereds name="João Silva" email="silva@email.com" />
        </ScrollView>
        <Footer>
          <ButtonBack onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={36} color="#c9c9" />
            <ButtonBackText>Voltar Para Home</ButtonBackText>
          </ButtonBack>
        </Footer>
      </LinearGradient>
    </>
  );
};

export default Registered;
