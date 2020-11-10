import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton, StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { getRandomPhotos } from '../../services/unsplashService';

import { useTypedSelector } from '../../store/useTypedSelector';
import { fetchQuiz, submitResponse, cleanQuiz } from '../../store/quiz';
import {
  Screen,
  QuizBox,
  QuizCounter,
  SocialShare,
  Loader,
} from '../../components';
import {
  Content,
  SocialShareContainer,
  QuizContainer,
  QuizCounterContainer,
  LoaderContainer,
} from './styles';

const amount = 10;

const Home: React.FC = () => {
  const quizScrollRef = useRef();
  const [photos, setPhotos] = useState([]);
  const navigation = useNavigation();
  const quiz = useTypedSelector((state) => state.quiz);
  const currentQuestion = useTypedSelector((state) => state.quiz.current);
  const quizStatus = useTypedSelector((state) => state.quiz.status);
  const correctAnswers = useTypedSelector((state) => state.quiz.correct);
  const incorrectAnswers = useTypedSelector((state) => state.quiz.incorrect);
  const loading = useTypedSelector((state) => state.quiz.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuiz({ amount }));
    getUnsplashPhotos();
    rewriteBackButton();
  }, []);

  useEffect(() => {
    if (quizStatus === 'finished') {
      navigateToResultsScreen();
    }
  }, [quizStatus]);

  const getUnsplashPhotos = async () => {
    const res = await getRandomPhotos({ count: amount });
    setPhotos(res);
  };

  const rewriteBackButton = () => {
    navigation.setOptions({
      headerLeft:
        (props: StackHeaderLeftButtonProps) => (
          <HeaderBackButton
            {...props}
            onPress={customGoBack}
          />
        ),
    });
  };

  const customGoBack = () => {
    dispatch(cleanQuiz());
    navigation.goBack();
  };

  const navigateToResultsScreen = () => {
    navigation.navigate('Results');
  };

  // console.log('\n\nquiz', quiz);
  // console.log('incorrectAnswers', incorrectAnswers);
  // console.log('current', currentQuestion);

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

  if (loading) {
    return (
      <Screen safe>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </Screen>
    );
  }

  return (

    <Screen safe>
      <Content>
        <QuizCounterContainer>
          <QuizCounter
            questionNumber={currentQuestion + 1}
            totalNumberOfQuestion={quiz.questionList.length}
            correctAnswers={correctAnswers.length}
            category={quiz?.questionList[currentQuestion]?.category || ''}
          />
        </QuizCounterContainer>
        <QuizContainer>
          <FlatList
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
                onFeedbackEnd={scrollToNextQuestion}
                images={photos}
                type={item.type}
              />
            )}
          />
        </QuizContainer>
        <SocialShareContainer>

          <SocialShare />
        </SocialShareContainer>
      </Content>
    </Screen>
  );
};

export default Home;
