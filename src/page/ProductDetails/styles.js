import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {COLORS, FONT_FAMILY} from '../../consts/utils';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerShadow = styled.View`
  height: 369px;
  border-radius: 46px;
  background-color: #faf4ee;
  elevation: 20;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  borderBottomLeftRadius: 46,
  borderBottomRightRadius: 46,
  backgroundColor: '#FAF4EE',
})`
  width: 100%;
  height: 369px;
  align-items: center;
  /* padding: 0 27px; */
`;

export const AppBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 32px 47px;
`;

export const HandleNavigation = styled.TouchableOpacity``;

export const IconBack = styled(Icon).attrs({
  name: 'chevron-left',
})`
  font-size: 20px;
  color: #8c746a;
`;

export const AppBarTitle = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-size: 23px;
  line-height: 31px;
  text-align: center;
`;

export const Spacer = styled.View`
  width: 20px;
  height: 20px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 86px;
  height: 128px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 24px 35px;
`;
export const ProducName = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 20px;
  line-height: 27px;
  color: #2d140d;
`;
export const ProducPrice = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-size: 30px;
  line-height: 40px;
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
  height: 28px;
  width: 31px;
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
  width: 34px;
  text-align: center;
`;

export const Increment = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 31px;
  background: ${COLORS.primary};
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const TextSize = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 20px;
  line-height: 27px;
  color: #2d140d;
  padding-left: 24px;
`;

export const WrapperIcons = styled.View`
  width: 45%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 24px;
  margin-bottom: 35px;
`;

export const SelectCoffee = styled.TouchableOpacity`
  align-items: center;
`;

export const BorderBottom = styled.View`
  width: 14px;
  height: 2px;
  border-radius: 50px;
  background: ${COLORS.primary};
  background: ${(props) => (props.isActive ? COLORS.primary : 'transparent')};
  margin-top: 13px;
`;

export const ContainerSugar = styled.View`
  flex-direction: row;
  padding-left: 24px;
  margin-bottom: 9px;
`;

export const TextSugar = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 20px;
  line-height: 27px;
  color: #2d140d;
`;

export const InCubes = styled(TextSugar)`
  opacity: 0.3;
  margin-left: 11px;
`;

export const ContainerSugarIcons = styled.View`
  width: 65%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 24px;
  margin-bottom: 39px;
`;

export const SelectSugar = styled(SelectCoffee)``;

export const ContainerButton = styled.View`
  align-items: center;
  margin-bottom: 55px;
`;

export const TextButton = styled.Text.attrs({})`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 18px;
  color: #ffffff;
`;
