import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SugarTwo = ({isActive}) => {
  return (
    <>
      {isActive ? (
        <Svg width={42} height={18} viewBox="0 0 42.338 18">
          <Path
            d="M40.838 5.917v8.5a1.417 1.417 0 01-1.417 1.417h-8.5a1.417 1.417 0 01-1.421-1.413v-8.5A1.417 1.417 0 0130.917 4.5h8.5a1.417 1.417 0 011.421 1.417z"
            fill="#cf9775"
          />
          <Path
            data-name="Path"
            d="M40.838 14.625a1.875 1.875 0 01-1.875 1.875h-11.25a1.875 1.875 0 01-1.875-1.875V3.375A1.875 1.875 0 0127.713 1.5h11.25a1.875 1.875 0 011.875 1.875z"
            fill="none"
            stroke="#2d140d"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <G data-name="Grupo 19">
            <G data-name="Grupo 20">
              <Path
                data-name="Path"
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
          </G>
        </Svg>
      ) : (
        <Svg width={42} height={18} viewBox="0 0 42 18">
          <G
            data-name="SugarTwo"
            fill="none"
            stroke="#cf9775"
            strokeMiterlimit={10}
            strokeWidth={3}>
            <Path
              data-name="Fill 9"
              d="M16.5 3.375v11.25a1.875 1.875 0 01-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625V3.375A1.875 1.875 0 013.375 1.5h11.25A1.875 1.875 0 0116.5 3.375zM40.5 3.375v11.25a1.875 1.875 0 01-1.875 1.875h-11.25a1.875 1.875 0 01-1.875-1.875V3.375A1.875 1.875 0 0127.375 1.5h11.25A1.875 1.875 0 0140.5 3.375z"
              opacity={0.3}
            />
          </G>
        </Svg>
      )}
    </>
  );
};

export default SugarTwo;
