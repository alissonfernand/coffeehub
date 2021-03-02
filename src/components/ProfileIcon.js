import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = ({color}) => {
  return (
    <Svg width={23.724} height={25.172} viewBox="0 0 23.724 25.172">
      <Path
        d="M22.724 20.342v3.107a.724.724 0 01-.724.724H1.724A.724.724 0 011 23.448v-3.106a2.9 2.9 0 011.81-2.687l5.431-2.172v-4.276a2.172 2.172 0 01-1.086-1.879V5.707a4.707 4.707 0 019.414 0v3.621a2.172 2.172 0 01-1.086 1.879v4.276l5.431 2.172a2.9 2.9 0 011.81 2.687z"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default ProfileIcon;
