import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const QuizContainer = styled.View`
  justify-content: flex-end;
  flex: 1;
`;

export const QuizText = styled.Text`
font-size: 18px;
padding-top: 20px;
color: #3462e0;
flex: 1;
`;

export const QuizLogo = styled.Image`
  width: ${Dimensions.get('window').width * 0.9}px;
  height: ${Dimensions.get('window').height * 0.2}px;
`;
