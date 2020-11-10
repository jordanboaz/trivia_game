import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
  width: 100%;
  flex-direction: row;

  padding: 16px;
  border-radius: 4px;
  justify-content: space-between;
`;

export const QuestionNumber = styled.Text`
flex: 1;
font-size: 18px;
color: rgba(15, 41, 189, 0.75);
`;

export const ScoreContainer = styled.View`
  flex: 1;
  justify-content: flex-start;

  /* align-items: center; */
`;

export const ScoreTitle = styled.Text`
font-size: 16px;
text-align: right;
color: rgba(15, 41, 189, 0.75);



`;

export const ScoreValue = styled.Text`
font-size: 20px;
text-align: right;
color: rgba(15, 41, 189, 0.75);


`;
