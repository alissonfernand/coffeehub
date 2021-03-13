import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const CoffeeSamll = ({isActive}) => {
  return (
    <>
      {isActive ? (
        <Svg width={25} height={31} viewBox="0 0 25.79 31.822">
          <Path
            data-name="CoffeeSamllBold"
            d="M20.12 5.79L6.991 8.548v1.686l4.713 20.991h5.89L22.98 8.548z"
            fill="#cf9775"
          />
          <G data-name="CoffeeSamllBold">
            <Path
              data-name="Fill 7"
              d="M18.991 31.322H6.8a.736.736 0 01-.684-.63L2.623 5.7h-.754A1.386 1.386 0 01.5 4.305V1.9A1.386 1.386 0 011.869.5h22.052a1.386 1.386 0 011.369 1.4v2.335a1.386 1.386 0 01-1.369 1.4h-.754l-3.492 25.057a.736.736 0 01-.684.63zM6.526 24.044l.822 5.809h11.094l.754-5.809zm-1.575-11.69L6.39 22.573H19.4l1.507-10.219zm-.958-6.719l.752 5.319h16.3l.755-5.319zM1.869 1.9v2.335H23.99V1.9z"
              fill="#2d140d"
              stroke="#2d140d"
              strokeMiterlimit={10}
            />
          </G>
        </Svg>
      ) : (
        <Svg width={25} height={31} viewBox="0 0 25.09 31.122">
          <Path
            data-name="CoffeeSamll"
            d="M18.641 30.972H6.45a.736.736 0 01-.684-.63L2.273 5.35h-.754A1.386 1.386 0 01.15 3.955V1.55A1.386 1.386 0 011.519.15h22.052a1.386 1.386 0 011.369 1.4v2.335a1.386 1.386 0 01-1.369 1.4h-.754l-3.492 25.057a.736.736 0 01-.684.63zM6.176 23.694l.822 5.809h11.094l.754-5.809zm-1.575-11.69L6.04 22.223h13.01l1.507-10.219zm-.958-6.719l.752 5.319h16.3l.755-5.319zM1.519 1.55v2.335H23.64V1.55z"
            fill="#cf9775"
            stroke="#cf9775"
            strokeMiterlimit={10}
            strokeWidth={0.3}
            opacity={0.3}
          />
        </Svg>
      )}
    </>
  );
};

export default CoffeeSamll;
