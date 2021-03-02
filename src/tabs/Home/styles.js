import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {COLORS, FONT_FAMILY} from '../../consts/utils';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${COLORS.background};
`;

export const NavBar = styled.View`
  flex-direction: row;
  /* height: 60px; */
  justify-content: space-between;
  align-items: center;

  padding: 27px 18px 32px;
`;

export const DisplayDrawer = styled.TouchableOpacity``;

export const DisplaySearch = styled(DisplayDrawer)``;

export const Image = styled.Image``;

export const Menu = styled.View`
  padding: 0 18px 32px;
`;

export const MenuRow = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 36px;
`;

export const TitleBold = styled(Title)`
  font-family: ${FONT_FAMILY.fontBold};
  color: ${COLORS.primary};
  max-width: 150px;
`;

export const FlatItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 36px 70px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconCoffee = styled(Image)`
  width: 40;
  height: 60px;
  margin-right: 32px;
`;

export const CoffeeTitle = styled(Title)`
  font-size: 20px;
  line-height: 27;
`;

export const IconArrow = styled(Icon)`
  color: ${COLORS.primary};
  font-size: 14px;
`;
