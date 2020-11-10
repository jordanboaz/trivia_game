import React from 'react';
import { Props } from './types';
import {
  Container, QuestionNumber, ScoreContainer, ScoreTitle, ScoreValue,
} from './styles';

const QuizCounter: React.FC<Props> = ({
  questionNumber,
  correctAnswers,
  totalNumberOfQuestion,
}: Props) => (
    <Container>
      <QuestionNumber>
        {`Question ${questionNumber}`}
      </QuestionNumber>

      <ScoreContainer>
        <ScoreTitle>Your score</ScoreTitle>
        <ScoreValue>{`${correctAnswers}/${totalNumberOfQuestion}`}</ScoreValue>
      </ScoreContainer>
    </Container>
  );

export default QuizCounter;
