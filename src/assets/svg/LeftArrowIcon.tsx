import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TSvgProps } from './SvgTypes';

export const LeftArrowIcon: React.FC<TSvgProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox='0 0 512 512' fill='none'>
    <Path
      fill={color}
      d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'
    />
  </Svg>
);
