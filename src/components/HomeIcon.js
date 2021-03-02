import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({color}) => {
  return (
    <Svg width={25.24} height={25.798} viewBox="0 0 25.24 25.798">
      <Path
        d="M16.696 24.798h3.094a.982.982 0 00.982-.982V12.57h2.794a.656.656 0 00.448-1.13L13.339 1.39a1.052 1.052 0 00-1.441 0L1.222 11.439a.656.656 0 00.448 1.13h2.797v11.247a.982.982 0 00.982.982h3.095a1.112 1.112 0 001.112-1.112v-6.3a.741.741 0 01.741-.741h4.447a.741.741 0 01.741.741v6.3a1.112 1.112 0 001.111 1.112z"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default HomeIcon;
