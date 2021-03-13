import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';

const SugarZero = ({isActive}) => {
  return (
    <>
      {isActive ? (
        <Svg width={25.078} height={24.412} viewBox="0 0 25.078 24.412">
          <G data-name="Grupo 24">
            <Path
              d="M19.389 9.706v9a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5z"
              fill="#cf9775"
            />
            <G data-name="Grupo 10">
              <Path
                data-name="Fill 9"
                d="M19.59 7.081v11.25a1.875 1.875 0 01-1.875 1.875H6.465a1.875 1.875 0 01-1.875-1.875V7.081a1.875 1.875 0 011.875-1.875h11.25a1.875 1.875 0 011.875 1.875z"
                fill="none"
                stroke="#2d140d"
                strokeMiterlimit={10}
                strokeWidth={3}
              />
              <G
                data-name="Ret\xE2ngulo 2"
                transform="rotate(-45.97 3.391 1.439)"
                fill="#0a090b"
                stroke="#fff">
                <Rect width={4} height={31} rx={2} stroke="none" />
                <Rect
                  x={0.5}
                  y={0.5}
                  width={3}
                  height={30}
                  rx={1.5}
                  fill="none"
                />
              </G>
            </G>
          </G>
        </Svg>
      ) : (
        <Svg width={25.078} height={24.412} viewBox="0 0 25.078 24.412">
          <G data-name="SugarZero" opacity={0.3}>
            <Path
              data-name="Fill 9"
              d="M19.59 7.081v11.25a1.875 1.875 0 01-1.875 1.875H6.465a1.875 1.875 0 01-1.875-1.875V7.081a1.875 1.875 0 011.875-1.875h11.25a1.875 1.875 0 011.875 1.875z"
              fill="none"
              stroke="#cf9775"
              strokeMiterlimit={10}
              strokeWidth={3}
            />
            <G
              data-name="Ret\xE2ngulo 2"
              transform="rotate(-45.97 3.391 1.439)"
              fill="#cf9775"
              stroke="#fff">
              <Rect width={4} height={31} rx={2} stroke="none" />
              <Rect
                x={0.5}
                y={0.5}
                width={3}
                height={30}
                rx={1.5}
                fill="none"
              />
            </G>
          </G>
        </Svg>
      )}
    </>
  );
};

export default SugarZero;
