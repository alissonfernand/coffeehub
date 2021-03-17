import styled from 'styled-components/native';

import {COLORS, FONT_FAMILY} from '../../consts/utils';

import bg from '../../assets/bg.png';

export const Container = styled.ImageBackground.attrs({
  source: `${bg}`,
})`
  flex: 1;
  background-color: ${COLORS.background};
  padding-top: 60px;
`;

export const TextCard = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-size: 23px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: #2d140d;
  margin-bottom: 40px;
`;

export const ScrollProducts = styled.ScrollView`
  height: 360px;
`;

export const CartProduct = styled.View.attrs({
  borderBottomWidth: 0.8,
  borderBottomColor: '#2d140d',
})`
  flex-direction: row;
  height: 88px;
  margin: 20px 27px 20px;
`;

export const ProductImage = styled.Image.attrs({
  width: 41,
  height: 61,
  resizeMode: 'contain',
})`
  width: 100px;
  height: 72px;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductDetails = styled.View`
  justify-content: space-evenly;
  margin-bottom: 16px;
`;

export const ProductName = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 16px;
  color: #2d140d;
`;

export const ProductSize = styled(ProductName)`
  font-size: 14px;
  color: #7e7e7e;
`;

export const ProductSugar = styled(ProductSize)``;

export const ContainerQuantityPrice = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;
`;
export const ProductAmount = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-weight: bold;
  font-size: 12px;
  color: #7e7e7e;
`;

export const ProductPrice = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-weight: bold;
  font-size: 16px;
  color: #cf9775;
`;

export const ContainerPriceBuy = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 27px 27px;
  flex-direction: row;
`;

export const Price = styled.Text`
  font-family: ${FONT_FAMILY.fontBold};
  font-weight: bold;
  font-size: 30px;
  color: #cf9775;
`;

export const TextBuy = styled.Text`
  font-family: ${FONT_FAMILY.fontRegular};
  font-size: 18px;
  text-transform: uppercase;
  color: #ffffff;
`;
