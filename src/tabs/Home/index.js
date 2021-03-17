import React from 'react';
import {FlatList, StatusBar} from 'react-native';
// import {Image} from 'react-native';

import drawer from '../../assets/drawer.png';
import search from '../../assets/search.png';
import coffees from '../../consts/coffees';

import {COLORS} from '../../consts/utils';

import {
  Container,
  NavBar,
  DisplayDrawer,
  DisplaySearch,
  Image,
  Menu,
  MenuRow,
  Title,
  TitleBold,
  FlatItem,
  SelectProduct,
  Wrapper,
  IconCoffee,
  CoffeeTitle,
  IconArrow,
} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavBar>
        <DisplayDrawer onPress={() => navigation.openDrawer()}>
          <Image source={drawer} style={{resizeMode: 'contain'}} />
        </DisplayDrawer>
        <DisplaySearch>
          <Image source={search} style={{resizeMode: 'contain'}} />
        </DisplaySearch>
      </NavBar>
      <Menu>
        <MenuRow>
          <Title>It's Great </Title>
          <TitleBold>Day for</TitleBold>
        </MenuRow>
        <TitleBold>Coffee.</TitleBold>
      </Menu>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={coffees}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <SelectProduct
            onPress={() => navigation.navigate('ProductDetails', item)}>
            <FlatItem>
              <Wrapper>
                <IconCoffee
                  source={item.image}
                  style={{resizeMode: 'contain'}}
                />
                <CoffeeTitle>{item.name}</CoffeeTitle>
              </Wrapper>
              <IconArrow name="chevron-right" />
            </FlatItem>
          </SelectProduct>
        )}
      />
    </Container>
  );
};

export default Home;
