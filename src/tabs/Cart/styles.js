import styled from 'styled-components/native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import {COLORS, FONT_FAMILY} from '../../consts/utils';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/bg.png'),
})`
  flex: 1;
  background-color: ${COLORS.background};
  padding-top: ${responsiveHeight(6.696428571428571)}px;
`;

export const TextCard = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-size: ${responsiveFontSize(3) - 1}px;
  width: ${responsiveWidth(100)}px;
  text-align: center;
  font-weight: bold;
  color: #2d140d;
  margin-bottom: ${responsiveHeight(4.464285714285714)}px;
`;

export const ScrollProducts = styled.ScrollView`
  height: ${responsiveHeight(40.17857142857143)}px;
`;

export const CartProduct = styled.View.attrs({
  borderBottomWidth: 0.8,
  borderBottomColor: '#2d140d',
})`
  flex-direction: row;
  height: ${responsiveHeight(9.821428571428571)}px;
  margin: ${responsiveHeight(2.232142857142857)}px
    ${responsiveWidth(6.521739130434783)}px
    ${responsiveHeight(2.232142857142857)}px;
`;

export const ProductImage = styled.Image.attrs({
  width: responsiveWidth(7.48792270531401),
  height: responsiveHeight(6.808035714285714),
  resizeMode: 'contain',
})`
  width: ${responsiveWidth(24.15458937198068)}px;
  height: ${responsiveHeight(8.035714285714286)}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductDetails = styled.View`
  justify-content: space-evenly;
  margin-bottom: ${responsiveHeight(1.785714285714286)}px;
`;

export const ProductName = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(2)}px;
  color: #2d140d;
`;

export const ProductSize = styled(ProductName)`
  font-size: ${responsiveFontSize(2) - 2}px;
  color: #7e7e7e;
`;

export const ProductSugar = styled(ProductSize)``;

export const ContainerQuantityPrice = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(1.785714285714286)}px;
`;
export const ProductAmount = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-weight: bold;
  font-size: ${responsiveFontSize(2) - 4}px;
  color: #7e7e7e;
`;

export const ProductPrice = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-weight: bold;
  font-size: ${responsiveFontSize(2)}px;
  color: #cf9775;
`;

export const ContainerPriceBuy = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 ${responsiveWidth(6.521739130434783)}px
    ${responsiveHeight(3.013392857142857)}px;
  flex-direction: row;
`;

export const Price = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-weight: bold;
  font-size: ${responsiveFontSize(2) - 2}px;
  color: #cf9775;
`;

export const TextBuy = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: ${responsiveFontSize(3) - 6}px;
  text-transform: uppercase;
  color: #ffffff;
`;
