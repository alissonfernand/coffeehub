import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {FONT_FAMILY} from '../../consts/utils';

export const AppBarContainer = styled.View`
  position: relative;
  flex-direction: row;
  width: 100%;
  padding: 65px 32px 25px;
  margin-bottom: 47px;
`;

export const HandleNavigation = styled.TouchableOpacity``;

export const IconBack = styled(Icon).attrs({
  name: 'chevron-left',
})`
  position: absolute;
  flex: 1;
  top: 5;
  font-size: 20px;
  color: #8c746a;
`;

export const ProductName = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${FONT_FAMILY.fontBold};
  font-size: 23px;
  line-height: 31;
`;
