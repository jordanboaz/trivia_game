import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { cleanQuiz } from '../../store/quiz';
import { useTypedSelector } from '../../store/useTypedSelector';
import { Screen, QuestionListResult, Button } from '../../components';

import {
  Container,
  ScoreContainer,
  ScoreText,
  QuestionListContainer,
} from './styles';

const Results: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const correct = useTypedSelector((state) => state.quiz.correct);
  const incorrect = useTypedSelector((state) => state.quiz.incorrect);
  const questionList = useTypedSelector((state) => state.quiz.questionList);

  const onPlayAgain = () => {
    dispatch(cleanQuiz());
    navigation.navigate('Home');
  };

  return (
    <Screen>
      <Container>
        <ScoreContainer>
          <ScoreText>{`You scored:\n${correct.length}/${questionList.length}`}</ScoreText>
        </ScoreContainer>
        <QuestionListContainer>
          <QuestionListResult questionList={questionList} correct={correct} incorrect={incorrect} />
        </QuestionListContainer>
        <Button text="Play Again" onPress={onPlayAgain} />
      </Container>
    </Screen>
  );
};

export default Results;
