import React from 'react';
import {StatusBar} from 'react-native';

import coffee from '../../assets/images/macciato.png';

// import Button from '../../components/Button';

import {
  Container,
  TextCard,
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
  // Price,
  // ContainerPriceBuy,
  // TextBuy,
  ScrollProducts,
} from './styles';

const Cart = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <TextCard>Card</TextCard>

      <ScrollProducts showsVerticalScrollIndicator={false}>
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
      </ScrollProducts>

      {/* <ContainerPriceBuy>
        <Price>$210</Price>
        <Button>
          <TextBuy>Buy</TextBuy>
        </Button>
      </ContainerPriceBuy> */}
    </Container>
  );
};

export default Cart;
