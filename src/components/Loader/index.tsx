import React from 'react';
import { Animated, Easing } from 'react-native';
import { Props } from './types';
import LoaderIcon from '../../assets/loader';

const Loader = ({ color = '#3462e0', center = true }: Props): JSX.Element => {
  const animateLoader = new Animated.Value(0);

  Animated.loop(
    Animated.timing(animateLoader, {
      toValue: 1,
      duration: 700,
      easing: Easing.bezier(0, 0, 1, 1),
      useNativeDriver: true,
    }),
  ).start();

  const centerStyle = center
    ? { flex: 1, justifyContent: 'center', alignItems: 'center' }
    : {};

  const iconStyle = {
    ...centerStyle,
    transform: [
      {
        rotate: animateLoader.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={{
        ...iconStyle,
      }}
    >
      <LoaderIcon width={32} height={32} color={color} />
    </Animated.View>
  );
};

export default Loader;
