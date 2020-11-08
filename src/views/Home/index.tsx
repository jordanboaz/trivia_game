import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../store/useTypedSelector';
import { submitResponse } from '../../store/quiz';
// import { Container } from './styles';

const Home: React.FC = () => {
  const quiz = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  console.log('quiz', quiz);
  return (

    <View>
      <Text>Hello world</Text>
      <Text onPress={() => dispatch(submitResponse({ response: 'True' }))}>True</Text>
      <Text onPress={() => dispatch(submitResponse({ response: 'False' }))}>False</Text>
    </View>
  );
};

export default Home;
