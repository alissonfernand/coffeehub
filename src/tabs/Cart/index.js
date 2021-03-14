import React from 'react';
import {StatusBar, View} from 'react-native';

import AppBar from '../../components/AppBar';

import coffee from '../../assets/images/macciato.png';

import {
  Container,
  CartProduct,
  ProductImage,
  Wrapper,
  ProductDetails,
  ProductName,
  ProductSize,
  ProductSugar,
  ContainerQuantityPrice,
  ProductAmount,
  ProductPrice,
} from './styles';

const Cart = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <AppBar text="Cart" />

      <CartProduct>
        <ProductImage source={coffee} />

        <Wrapper>
          <ProductDetails>
            <ProductName>Macchiato</ProductName>
            <ProductSize>Size Small</ProductSize>
            <ProductSugar>Sugar One</ProductSugar>
          </ProductDetails>

          <ContainerQuantityPrice>
            <ProductAmount>x2</ProductAmount>
            <ProductPrice>$210</ProductPrice>
          </ContainerQuantityPrice>
        </Wrapper>
      </CartProduct>
      <CartProduct>
        <ProductImage source={coffee} />

        <Wrapper>
          <ProductDetails>
            <ProductName>Macchiato</ProductName>
            <ProductSize>Size Small</ProductSize>
            <ProductSugar>Sugar One</ProductSugar>
          </ProductDetails>

          <ContainerQuantityPrice>
            <ProductAmount>x2</ProductAmount>
            <ProductPrice>$210</ProductPrice>
          </ContainerQuantityPrice>
        </Wrapper>
      </CartProduct>
      <CartProduct>
        <ProductImage source={coffee} />

        <Wrapper>
          <ProductDetails>
            <ProductName>Macchiato</ProductName>
            <ProductSize>Size Small</ProductSize>
            <ProductSugar>Sugar One</ProductSugar>
          </ProductDetails>

          <ContainerQuantityPrice>
            <ProductAmount>x2</ProductAmount>
            <ProductPrice>$210</ProductPrice>
          </ContainerQuantityPrice>
        </Wrapper>
      </CartProduct>
    </Container>
  );
};

export default Cart;
