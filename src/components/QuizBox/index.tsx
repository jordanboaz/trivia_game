import React, { useEffect, useState } from 'react';
import { sortAlphabetically } from '../../utils';
import { Props } from './types';
import {
  Container,
  QuestionContainer,
  Question,
  AnswerContainer,
  AnswerButton,
  AnswerText,
  PhotoContainer,
  Photo,
} from './styles';

const QuizBox: React.FC<Props> = ({
  question,
  questionIndex,
  questionStatus,
  correctAnswer,
  incorrectAnswers,
  onPress,
  onFeedbackEnd,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  useEffect(() => {
    if (questionStatus !== 'unaswered') {
      feedbackAnswer();
    }
  }, [questionStatus]);

  const feedbackAnswer = async () => {
    setTimeout(() => {
      onFeedbackEnd();
    }, 1000);
  };

  const listAnswers = (incorrect: Props['incorrectAnswers'], correct: Props['correctAnswer']) => {
    const allAnswers = [...incorrect, correct];

    return allAnswers.sort(sortAlphabetically);
  };

  return (
    <Container>
      <PhotoContainer>
        <Photo source={require('../../assets/image.png')} />
      </PhotoContainer>
      <QuestionContainer>
        <Question>{question}</Question>
        <AnswerContainer>

          {listAnswers(incorrectAnswers, correctAnswer).map(
            (answer, index) => (
              <AnswerButton
                key={`${question}_${answer}`}
                correct={questionStatus === 'success' && index === selectedAnswer}
                incorrect={questionStatus === 'failure' && index === selectedAnswer}
                onPress={() => {
                  setSelectedAnswer(index);
                  onPress(questionIndex, answer);
                }}
              >
                <AnswerText whiteText={questionStatus !== 'unaswered' && index === selectedAnswer}>{answer}</AnswerText>
              </AnswerButton>
            ),
          )}
        </AnswerContainer>
      </QuestionContainer>
    </Container>
  );
};

export default QuizBox;
