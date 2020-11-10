import React from 'react';
import Svg, {
  Defs, G, Mask, Path, Use,
} from 'react-native-svg';
import { processColor, Platform } from 'react-native';

interface Props {
  color: string | number | undefined;
  otherProps: any;
}

const Loader: React.ReactNode = (props: Props) => {
  const { color, ...otherProps } = props;
  const leColor = Platform.OS === 'ios'
    ? processColor(color || 'currentColor')
    : color || 'currentColor';

  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      color={leColor as string}
      {...otherProps}
    >
      <Defs>
        <Path
          id="Loadera"
          d="M19.257 25.7c1.727-.578 2.606 2.048.878 2.626a13.023 13.023 0 0 1-4.901.651C8.07 28.554 2.6 22.398 3.023 15.234 3.446 8.07 9.603 2.6 16.766 3.023c7.164.423 12.634 6.58 12.211 13.743-.034.58-.11 1.188-.222 1.757-.35 1.79-3.074 1.26-2.724-.532.093-.47.15-.91.179-1.387.333-5.632-3.974-10.481-9.606-10.814-5.632-.332-10.481 3.975-10.814 9.607-.332 5.631 3.974 10.48 9.606 10.813 1.314.078 2.612-.09 3.86-.51z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="Loaderb" fill="#fff">
          <Use href="#Loadera" />
        </Mask>
        <Use fill="#000" fillRule="nonzero" href="#a" />
        <G fill={leColor as string || '#73DC16'} mask="url(#Loaderb)">
          <Path d="M0 0h32v32H0z" />
        </G>
      </G>
    </Svg>
  );
};

export default Loader;
