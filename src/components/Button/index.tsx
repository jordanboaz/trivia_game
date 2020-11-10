import React from 'react';
import { Props } from './types';
import { ButtonContainer, ButtonText } from './styles';

const Button: React.FC<Props> = ({ onPress, text }: Props) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);

export default Button;
