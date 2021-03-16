import styled from 'styled-components/native';

import {COLORS} from '../../consts/utils';

export const ButtonCart = styled.TouchableOpacity.attrs({
  shadowcolor: 'red',
})`
  width: 198px;
  height: 55px;
  background-color: ${COLORS.primary};
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  elevation: 30;
`;
