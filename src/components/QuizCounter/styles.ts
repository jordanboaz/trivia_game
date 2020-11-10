import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  width: 100%;
  flex-direction: row;

  padding: 10px 16px;
  border-radius: 4px;
  justify-content: space-between;
`;

export const QuestionNumber = styled.Text`
flex: 1;
font-size: 18px;
color: #3462e0;
margin-bottom: 3px;
`;

export const ScoreContainer = styled.View`
  flex: 0.4;
  justify-content: flex-start;

`;

export const ScoreTitle = styled.Text`
  font-size: 16px;
  text-align: right;
  color: #3462e0;

`;

export const ScoreValue = styled.Text`
  font-size: 20px;
  text-align: right;
  color: #3462e0;
`;

export const QuestionInfoContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const QuestionCategory = styled.Text.attrs({
  numberOfLines: 1,
})`

  color: #666666;
  flex-wrap: wrap;
`;
