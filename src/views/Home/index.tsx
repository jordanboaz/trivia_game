import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { useTypedSelector } from '../../store/useTypedSelector';
import { fetchQuiz, submitResponse } from '../../store/quiz';
import { Screen } from '../../components';
// import { Container } from './styles';

const Home: React.FC = () => {
  const quiz = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  console.log('quiz', quiz);
  return (

    <Screen safe>
      <Text>Hello world</Text>
      <Text onPress={() => dispatch(submitResponse({ response: 'True' }))}>True</Text>
      <Text onPress={() => dispatch(submitResponse({ response: 'False' }))}>False</Text>
      <Text onPress={() => dispatch(fetchQuiz({ amount: 3 }))}>GET!</Text>
    </Screen>
  );
};

export default Home;
