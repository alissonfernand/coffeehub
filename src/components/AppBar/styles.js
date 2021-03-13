import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {FONT_FAMILY} from '../../consts/utils';

export const AppBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 65px 32px 25px;
  margin-bottom: 47px;
`;

export const IconBack = styled(Icon).attrs({
  name: 'chevron-left',
})`
  font-size: 20px;
  color: #8c746a;
`;

export const ProductName = styled.Text`
  flex: 2;
  font-family: ${FONT_FAMILY.fontBold};
  font-size: 23px;
  line-height: 31;
`;
