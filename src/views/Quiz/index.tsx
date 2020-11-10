import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Text, View, FlatList } from 'react-native';
import { useTypedSelector } from '../../store/useTypedSelector';
import { fetchQuiz, submitResponse, advanceQuiz } from '../../store/quiz';
import {
  Screen, QuizBox, QuizList, QuizCounter,
} from '../../components';
import { Question } from '../../types/Question';
import { Content, SocialShare } from './styles';

const Home: React.FC = () => {
  const quizScrollRef = useRef();
  const navigation = useNavigation();
  const quiz = useTypedSelector((state) => state.quiz);
  const currentQuestion = useTypedSelector((state) => state.quiz.current);
  const quizStatus = useTypedSelector((state) => state.quiz.status);
  const correctAnswers = useTypedSelector((state) => state.quiz.correct);
  const incorrectAnswers = useTypedSelector((state) => state.quiz.incorrect);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuiz({ amount: 3 }));
  }, []);

  useEffect(() => {
    if (quizStatus === 'finished') {
      navigateToResultsScreen();
    }
  }, [quizStatus]);

  const navigateToResultsScreen = () => {
    navigation.navigate('Results');
  };

  console.log('\n\n\quiz', quiz);
  console.log('incorrectAnswers', incorrectAnswers);
  console.log('current', currentQuestion);

  const onSelectAnswer = (questionNumber: number, response: string) => {
    dispatch(submitResponse({ questionNumber, response }));
  };

  const questionStatus = (questionIndex: number): 'unaswered' | 'success' | 'failure' => {
    if (correctAnswers.includes(questionIndex)) {
      return 'success';
    }
    if (incorrectAnswers.includes(questionIndex)) {
      return 'failure';
    }
    return 'unaswered';
  };

  const scrollToNextQuestion = () => {
    quizScrollRef?.current?.scrollToIndex({ index: currentQuestion });
  };
  return (

    <Screen safe>
      <Content>
        <View style={{ flex: 0.2, paddingHorizontal: 16 }}>
          <QuizCounter
            questionNumber={currentQuestion + 1}
            totalNumberOfQuestion={quiz.questionList.length}
            correctAnswers={correctAnswers.length}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            // style={{ backgroundColor: 'red' }}
            contentContainerStyle={{ alignItems: 'center' }}
            ref={quizScrollRef}
            data={quiz.questionList}
            loading={quiz.loading}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.question}
            renderItem={({ item, index }) => (
              <QuizBox
                question={item.question}
                questionIndex={index}
                questionStatus={questionStatus(index)}
                category={item.category}
                correctAnswer={item.correctAnswer}
                incorrectAnswers={item.incorrectAnswers}
                difficulty={item.difficulty}
                onPress={onSelectAnswer}
                onFeedbackEnd={() => {
                  console.log('Feedback ended. Go next');
                  scrollToNextQuestion();
                }}
                type={item.type}
              />
            )}
          />
        </View>
        <View style={{ flex: 0.2 }}>

          <SocialShare>
            <Text>Social Share</Text>
          </SocialShare>
        </View>
      </Content>
    </Screen>
  );
};

export default Home;
