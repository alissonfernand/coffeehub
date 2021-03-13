import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SugarThree = ({isActive}) => {
  return (
    <>
      {isActive ? (
        <Svg width={42} height={42} viewBox="0 0 42.338 42">
          <Path
            d="M40.838 29.917v8.5a1.417 1.417 0 01-1.417 1.417h-8.5a1.417 1.417 0 01-1.421-1.413v-8.5a1.417 1.417 0 011.417-1.421h8.5a1.417 1.417 0 011.421 1.417z"
            fill="#cf9775"
          />
          <Path
            data-name="Path"
            d="M40.838 38.625a1.875 1.875 0 01-1.875 1.875h-11.25a1.875 1.875 0 01-1.875-1.875v-11.25a1.875 1.875 0 011.875-1.875h11.25a1.875 1.875 0 011.875 1.875z"
            fill="none"
            stroke="#2d140d"
            strokeMiterlimit={10}
            strokeWidth={3}
          />
          <G data-name="Grupo 19">
            <G data-name="Grupo 20">
              <Path
                data-name="Path"
                d="M16.5 30v9a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 39v-9A1.5 1.5 0 016 28.5h9a1.5 1.5 0 011.5 1.5z"
                fill="#cf9775"
              />
              <Path
                data-name="Path"
                d="M16.5 27.375v11.25a1.875 1.875 0 01-1.875 1.875H3.375A1.875 1.875 0 011.5 38.625v-11.25A1.875 1.875 0 013.375 25.5h11.25a1.875 1.875 0 011.875 1.875z"
                fill="none"
                stroke="#2d140d"
                strokeMiterlimit={10}
                strokeWidth={3}
              />
            </G>
          </G>
          <G data-name="Grupo 21">
            <G data-name="Grupo 20">
              <Path
                data-name="Path"
                d="M28.5 6v9a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5V6A1.5 1.5 0 0118 4.5h9A1.5 1.5 0 0128.5 6z"
                fill="#cf9775"
              />
              <Path
                data-name="Path"
                d="M28.5 3.375v11.25a1.875 1.875 0 01-1.875 1.875h-11.25a1.875 1.875 0 01-1.875-1.875V3.375A1.875 1.875 0 0115.375 1.5h11.25A1.875 1.875 0 0128.5 3.375z"
                fill="none"
                stroke="#2d140d"
                strokeMiterlimit={10}
                strokeWidth={3}
              />
            </G>
          </G>
        </Svg>
      ) : (
        <Svg width={42} height={42} viewBox="0 0 42.8 41.685">
          <G
            data-name="SugarThree"
            opacity={0.3}
            fill="none"
            stroke="#cf9775"
            strokeMiterlimit={10}
            strokeWidth={3}>
            <Path d="M41.3 38.31a1.875 1.875 0 01-1.875 1.875h-11.25A1.875 1.875 0 0126.3 38.31V27.06a1.875 1.875 0 011.875-1.875h11.25A1.875 1.875 0 0141.3 27.06z" />
            <Path
              data-name="Path"
              d="M16.5 27.06v11.25a1.875 1.875 0 01-1.875 1.875H3.375A1.875 1.875 0 011.5 38.31V27.06a1.875 1.875 0 011.875-1.875h11.25A1.875 1.875 0 0116.5 27.06zM13.9 14.625V3.375A1.875 1.875 0 0115.775 1.5h11.25A1.875 1.875 0 0128.9 3.375v11.25a1.875 1.875 0 01-1.875 1.875h-11.25a1.875 1.875 0 01-1.875-1.875z"
            />
          </G>
        </Svg>
      )}
    </>
  );
};

export default SugarThree;
