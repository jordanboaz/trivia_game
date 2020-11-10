import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import {
  Container, QuizContainer, QuizLogo, QuizText,
} from './styles';

import Quiz from '../../assets/quiz.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>

      <QuizContainer>
        <QuizLogo source={Quiz} resizeMode="contain" />
      </QuizContainer>

      <QuizText>Can you solve this challenge?!</QuizText>

      <Button onPress={() => { navigation.navigate('Quiz'); }} text="Start Game" />
    </Container>
  );
};

export default Home;
