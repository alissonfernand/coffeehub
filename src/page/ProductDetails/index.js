import React, {useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

import background from '../../assets/background_details.png';

import {
  Container,
  ContainerShadow,
  ImageBackground,
  TabBar,
  TouchableOpacity,
  IconBack,
  ProductName,
  ProductImage,
  Wrapper,
  ProducName,
  ProducPrice,
  ContainerAmount,
  Increment,
  IconPlus,
  MinusIcon,
  Amount,
  Decrement,
  TextSize,
  WrapperIcons,
  SelectCoffee,
  BorderBottom,
  ContainerSugar,
  TextSugar,
  InCubes,
  ContainerSugarIcons,
  SelectSugar,
  ContainerButton,
  ButtonAddCart,
  TextButton,
} from './styles';

import img from '../../assets/coffees/macciato.png';

import CoffeeSmall from '../../components/CoffeesSizes/CoffeeSmall';
import CoffeeMedium from '../../components/CoffeesSizes/CoffeeMedium';
import CoffeeLarge from '../../components/CoffeesSizes/CoffeeLarge';

import SugarZero from '../../components/sugars/SugarZero';
import SugarOne from '../../components/sugars/SugarOne';
import SugarTwo from '../../components/sugars/SugarTwo';
import SugarThree from '../../components/sugars/SugarThree';
import AppBar from '../../components/AppBar';

const ProductDetails = () => {
  const [size, setSize] = useState('small');
  const [sugar, setSugar] = useState('zero');
  const [amout, setAmout] = useState(1);

  function handleSize(coffeeSize) {
    setSize(coffeeSize);
  }

  function handleSugar(coffeeSugar) {
    setSugar(coffeeSugar);
  }

  function incrementAmount() {
    setAmout(amout + 1);
  }

  function decrementAmount() {
    if (amout === 1) {
      return;
    }
    setAmout(amout - 1);
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ContainerShadow>
        <ImageBackground source={background}>
          <AppBar text={'dasdasd'} />

          <ProductImage source={img} />
        </ImageBackground>
      </ContainerShadow>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <View>
            <ProducName>Macchiato</ProducName>
            <ProducPrice>$210</ProducPrice>
          </View>
          <ContainerAmount>
            <Decrement onPress={decrementAmount}>
              <MinusIcon />
            </Decrement>
            <Amount>{amout}</Amount>
            <Increment onPress={incrementAmount}>
              <IconPlus />
            </Increment>
          </ContainerAmount>
        </Wrapper>

        <TextSize>Size</TextSize>

        <WrapperIcons>
          <SelectCoffee onPress={() => handleSize('small')}>
            <CoffeeSmall isActive={size === 'small' ? true : false} />
            <BorderBottom isActive={size === 'small' ? true : false} />
          </SelectCoffee>
          <SelectCoffee onPress={() => handleSize('medium')}>
            <CoffeeMedium isActive={size === 'medium' ? true : false} />
            <BorderBottom isActive={size === 'medium' ? true : false} />
          </SelectCoffee>
          <SelectCoffee onPress={() => handleSize('large')}>
            <CoffeeLarge isActive={size === 'large' ? true : false} />
            <BorderBottom isActive={size === 'large' ? true : false} />
          </SelectCoffee>
        </WrapperIcons>

        <ContainerSugar>
          <TextSugar>Sugar</TextSugar>
          <InCubes>(In Cubes)</InCubes>
        </ContainerSugar>

        <ContainerSugarIcons>
          <SelectSugar onPress={() => handleSugar('zero')}>
            <SugarZero isActive={sugar === 'zero' ? true : false} />
            <BorderBottom isActive={sugar === 'zero' ? true : false} />
          </SelectSugar>

          <SelectSugar onPress={() => handleSugar('one')}>
            <SugarOne isActive={sugar === 'one' ? true : false} />
            <BorderBottom isActive={sugar === 'one' ? true : false} />
          </SelectSugar>

          <SelectSugar onPress={() => handleSugar('two')}>
            <SugarTwo isActive={sugar === 'two' ? true : false} />
            <BorderBottom isActive={sugar === 'two' ? true : false} />
          </SelectSugar>

          <SelectSugar onPress={() => handleSugar('three')}>
            <SugarThree isActive={sugar === 'three' ? true : false} />
            <BorderBottom isActive={sugar === 'three' ? true : false} />
          </SelectSugar>
        </ContainerSugarIcons>

        <ContainerButton>
          <ButtonAddCart>
            <TextButton>Add to cart</TextButton>
          </ButtonAddCart>
        </ContainerButton>
      </ScrollView>
    </Container>
  );
};

export default ProductDetails;
