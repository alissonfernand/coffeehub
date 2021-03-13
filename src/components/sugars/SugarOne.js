import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SugarOne = ({isActive}) => {
  return (
    <>
      {isActive ? (
        <Svg width={18} height={18} viewBox="0 0 18 18">
          <G data-name="SugarOneBold">
            <Path
              d="M16.5 6v9a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 15V6A1.5 1.5 0 016 4.5h9A1.5 1.5 0 0116.5 6z"
              fill="#cf9775"
            />
            <Path
              data-name="Path"
              d="M16.5 3.375v11.25a1.875 1.875 0 01-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625V3.375A1.875 1.875 0 013.375 1.5h11.25A1.875 1.875 0 0116.5 3.375z"
              fill="none"
              stroke="#2d140d"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
          </G>
        </Svg>
      ) : (
        <Svg width={18} height={18} viewBox="0 0 18 18">
          <Path
            data-name="SugarOne"
            d="M16.5 3.375v11.25a1.875 1.875 0 01-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625V3.375A1.875 1.875 0 013.375 1.5h11.25A1.875 1.875 0 0116.5 3.375z"
            fill="none"
            stroke="#cf9775"
            strokeMiterlimit={10}
            strokeWidth={3}
            opacity={0.3}
          />
        </Svg>
      )}
    </>
  );
};

export default SugarOne;
