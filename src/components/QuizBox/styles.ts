import { Animated, Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const buttonCorrect = css`
  background: green;
`;

const buttonIncorrect = css`
  background: #e63c3c;
`;

const horizontalMargin = 20;

export const Container = styled(Animated.View)`
background: #fff;
margin: 0 ${horizontalMargin}px;
height: ${Dimensions.get('screen').height / 2}px;
width: ${Dimensions.get('screen').width - horizontalMargin * 2}px;
padding: 16px;
justify-content: space-between;
border-radius: 8px;

`;

export const PhotoContainer = styled.View`
  flex: 1;
`;

export const Photo = styled.Image`
  width: 100%;
  height: ${Dimensions.get('screen').height / 4}px;
  border-width: 1px;
  border-color: #c6c6c6;
  border-radius: 4px;
`;

export const QuestionContainer = styled.View`

`;

export const Question = styled.Text`
  color: #666666;
  margin-bottom: 8px;
`;

export const AnswerContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 0;
`;

export const AnswerButton = styled.TouchableOpacity<{ correct: boolean; incorrect: boolean }>`
  flex: 0.4;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-color: #c6c6c6;
  border-radius: 4px;
  border-width: 1px;
  ${({ correct }) => correct && buttonCorrect}
  ${({ incorrect }) => incorrect && buttonIncorrect};
`;

export const AnswerText = styled.Text<{ whiteText?: boolean }>`
  color: ${({ whiteText }) => (whiteText ? 'white' : '#666666')}

`;
