import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LocationIcon = ({color}) => {
  return (
    <Svg width={24.002} height={28.954} viewBox="0 0 24.002 28.954">
      <Path
        data-name="Fill 1"
        d="M12 27.954a.8.8 0 01-.49-.17c-5.71-4.5-8.321-8.718-9.506-11.459a10.543 10.543 0 01-.736-2.13 3.38 3.38 0 01-.068-.362A10.475 10.475 0 011 11.8 10.913 10.913 0 0112 1a10.933 10.933 0 0111 10.8 10.96 10.96 0 01-.195 2.029 7.376 7.376 0 01-.075.361 10.411 10.411 0 01-.73 2.135c-1.183 2.737-3.793 6.948-9.506 11.459a.784.784 0 01-.494.17zm0-21.366a5.335 5.335 0 105.429 5.335A5.388 5.388 0 0012 6.588z"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default LocationIcon;
