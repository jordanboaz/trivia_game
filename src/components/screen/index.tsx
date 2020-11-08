import React, { FunctionComponent } from 'react';
import { SafeArea, View } from './styles';
import { Props } from './types';

const Screen: FunctionComponent<Props> = ({ safe = false, children }: Props) => {
  if (safe) {
    return <SafeArea>{children}</SafeArea>;
  }
  return <View>{children}</View>;
};

export default Screen;
