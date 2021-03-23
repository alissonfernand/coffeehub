import styled from 'styled-components/native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import Icon from 'react-native-vector-icons/FontAwesome';

import {COLORS, FONT_FAMILY} from '../../consts/utils';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerShadow = styled.View.attrs({
  elevation: 30,
})`
  height: ${responsiveHeight(44.19642857142857)}px;
  border-radius: 46px;
  background-color: #faf4ee;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  borderBottomLeftRadius: 46,
  borderBottomRightRadius: 46,
  backgroundColor: '#FAF4EE',
})`
  width: ${responsiveWidth(100)}px;
  height: ${responsiveHeight(46)}px;
  align-items: center;
`;

export const AppBar = styled.View`
  width: ${responsiveWidth(100)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${responsiveHeight(9.5)}px ${responsiveWidth(7.729468599033816)}px
    ${responsiveHeight(5.245535714285714)}px;
`;

export const HandleNavigation = styled.TouchableOpacity``;

export const IconBack = styled(Icon).attrs({
  name: 'chevron-left',
})`
  font-size: ${responsiveFontSize(3) - 4}px;
  color: #8c746a;
`;

export const AppBarTitle = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-size: ${responsiveFontSize(3) - 1}px;
  line-height: ${responsiveHeight(3.459821428571429)}px;
  text-align: center;
`;

export const Spacer = styled.View`
  width: ${responsiveWidth(4.830917874396135)}px;
  height: ${responsiveHeight(2.232142857142857)}px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${responsiveWidth(20.77294685990338)}px;
  height: ${responsiveHeight(14.28571428571429)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${responsiveHeight(4.464285714285714)}px
    ${responsiveWidth(5.797101449275362)}px ${responsiveHeight(3.90625)}px;
`;
export const ProducName = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(3) - 4}px;
  line-height: ${responsiveHeight(3.013392857142857)}px;
  color: #2d140d;
`;
export const ProducPrice = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-size: ${responsiveFontSize(4) - 2}px;
  line-height: ${responsiveHeight(4.464285714285714)}px;
  color: ${COLORS.primary};
`;

export const ContainerAmount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Decrement = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: ${responsiveHeight(3.125)}px;
  width: ${responsiveWidth(7.48792270531401)}px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${COLORS.primary};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const IconPlus = styled(Icon).attrs({
  name: 'plus',
})`
  color: ${COLORS.background};
`;

export const MinusIcon = styled(IconPlus).attrs({
  name: 'minus',
})``;

export const Amount = styled.Text`
  width: ${responsiveWidth(8.21256038647343)}px;
  text-align: center;
`;

export const Increment = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  height: ${responsiveHeight(3.125)}px;
  width: ${responsiveWidth(7.48792270531401)}px;
  background: ${COLORS.primary};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const TextSize = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(3) - 4}px;
  line-height: ${responsiveHeight(3.013392857142857)}px;
  color: #2d140d;
  padding-left: ${responsiveWidth(5.797101449275362)}px;
`;

export const WrapperIcons = styled.View`
  width: ${responsiveWidth(45)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: ${responsiveWidth(5.797101449275362)}px;
  margin-bottom: ${responsiveHeight(3.90625)}px;
`;

export const SelectCoffee = styled.TouchableOpacity`
  align-items: center;
`;

export const BorderBottom = styled.View`
  width: ${responsiveWidth(3.381642512077295)}px;
  height: ${responsiveHeight(0.2232142857142857)}px;
  border-radius: 50px;
  background: ${COLORS.primary};
  background: ${(props) => (props.isActive ? COLORS.primary : 'transparent')};
  margin-top: ${responsiveHeight(1.450892857142857)}px;
`;

export const ContainerSugar = styled.View`
  flex-direction: row;
  padding-left: ${responsiveWidth(5.797101449275362)}px;
  margin-bottom: ${responsiveHeight(1.004464285714286)}px;
`;

export const TextSugar = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(3) - 4}px;
  line-height: ${responsiveHeight(3.013392857142857)}px;
  color: #2d140d;
`;

export const InCubes = styled(TextSugar)`
  opacity: 0.3;
  margin-left: ${responsiveWidth(2.657004830917874)}px;
`;

export const ContainerSugarIcons = styled.View`
  width: ${responsiveWidth(65)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: ${responsiveWidth(5.797101449275362)}px;
  margin-bottom: ${responsiveHeight(4.352678571428571)}px;
`;

export const SelectSugar = styled(SelectCoffee)``;

export const ContainerButton = styled.View`
  align-items: center;
  margin-bottom: ${responsiveHeight(6.138392857142857)}px;
`;

export const TextButton = styled.Text.attrs({})`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(2) + 2}px;
  color: #ffffff;
`;
