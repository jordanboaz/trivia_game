import styled, { css } from 'styled-components/native';

const correctText = css`
  color: green;
`;

const incorrectText = css`
  color: #e63c3c;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const QuestionText = styled.Text<{ correct?: boolean }>`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: bold;
  text-align: justify;
  ${({ correct }) => (correct ? correctText : incorrectText)}
`;
