import React from 'react';
import {StatusBar} from 'react-native';

import {useSelector} from 'react-redux';

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
  // get state reducer
  const {products} = useSelector((state) => state.cart);
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <TextCard>Card</TextCard>

      <ScrollProducts showsVerticalScrollIndicator={false}>
        {products.length ? (
          products.map((product) => (
            <CartProduct key={product.id}>
              <ProductImage source={{uri: product.image}} />

              <Wrapper>
                <ProductDetails>
                  <ProductName>{product.name}</ProductName>
                  <ProductSize>Size {product.size}</ProductSize>
                  <ProductSugar>Sugar {product.sugar}</ProductSugar>
                </ProductDetails>

                <ContainerQuantityPrice>
                  <ProductAmount>x{product.amount}</ProductAmount>
                  <ProductPrice>${product.price}</ProductPrice>
                </ContainerQuantityPrice>
              </Wrapper>
            </CartProduct>
          ))
        ) : (
          <ProductPrice>dasdasd</ProductPrice>
        )}
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
