import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {COLORS, FONT_FAMILY} from '../../consts/utils';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${COLORS.background};
  padding-top: 60px;
`;

export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${responsiveHeight(3.125)}px ${responsiveHeight(4.347826086956522)}px
    ${responsiveHeight(3.58)}px;
`;

export const DisplayDrawer = styled.TouchableOpacity``;

export const DisplaySearch = styled(DisplayDrawer)``;

export const Image = styled.Image`
  width: ${responsiveWidth(5.08)};
  height: ${responsiveHeight(2.35)};
`;

export const Menu = styled.View`
  padding: 0 ${responsiveHeight(4.347826086956522)}px
    ${responsiveHeight(3.58)}px;
`;

export const MenuRow = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(4.5)};
`;

export const TitleBold = styled(Title)`
  font-family: ${FONT_FAMILY.fontBold};
  color: ${COLORS.primary};
`;

export const FlatItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${responsiveHeight(4.347826086956522)}px ${responsiveHeight(6.7)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconCoffee = styled(Image)`
  width: ${responsiveWidth(9.67)};
  height: ${responsiveHeight(6.7)};
  margin-right: ${responsiveWidth(7.73)}px;
`;

export const CoffeeTitle = styled(Title)`
  font-size: ${responsiveFontSize(2.5)};
  line-height: ${responsiveFontSize(3.375)};
`;

export const IconArrow = styled(Icon)`
  color: ${COLORS.primary};
  font-size: ${responsiveFontSize(1.75)};
`;
