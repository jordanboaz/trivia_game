import React from 'react';
import { Props } from './types';
import {
  Container,
  QuestionNumber,
  ScoreContainer,
  ScoreTitle,
  ScoreValue,
  QuestionInfoContainer,
  QuestionCategory,
} from './styles';

const QuizCounter: React.FC<Props> = ({
  questionNumber,
  correctAnswers,
  totalNumberOfQuestion,
  category,
}: Props) => (
    <Container>
      <QuestionInfoContainer>
        <QuestionNumber>
          {`Question ${questionNumber}`}
        </QuestionNumber>
        <QuestionCategory>
          {`${category}`}
        </QuestionCategory>
      </QuestionInfoContainer>

      <ScoreContainer>
        <ScoreTitle>Your score</ScoreTitle>
        <ScoreValue>{`${correctAnswers}/${totalNumberOfQuestion}`}</ScoreValue>
      </ScoreContainer>
    </Container>
  );

export default QuizCounter;
