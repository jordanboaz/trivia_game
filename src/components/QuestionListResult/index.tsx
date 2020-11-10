import React from 'react';
import { View } from 'react-native';
import { Props } from './types';
import { Container, QuestionText } from './styles';

const QuestionListResult: React.FC<Props> = ({
  questionList,
  correct,
  incorrect,
}: Props) => (
    <Container>
      {questionList.map((question, index) => (
        <QuestionText correct={correct.includes(index)} key={question.question}>
          {`${index + 1}- ${question.question}`}
        </QuestionText>
      ))}
    </Container>
  );

export default QuestionListResult;
