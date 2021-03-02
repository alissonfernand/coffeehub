import React from 'react';
import {FlatList} from 'react-native';
// import {Image} from 'react-native';

import drawer from '../../assets/drawer.png';
import search from '../../assets/search.png';
import coffees from '../../consts/coffees';

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
  Wrapper,
  IconCoffee,
  CoffeeTitle,
  IconArrow,
} from './styles';

const Home = ({navigation}) => {
  return (
    <Container>
      <NavBar>
        <DisplayDrawer onPress={() => navigation.openDrawer()}>
          <Image source={drawer} />
        </DisplayDrawer>
        <DisplaySearch>
          <Image source={search} />
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
          <FlatItem>
            <Wrapper>
              <IconCoffee source={item.image} style={{resizeMode: 'contain'}} />
              <CoffeeTitle>{item.name}</CoffeeTitle>
            </Wrapper>
            <IconArrow name="chevron-right" />
          </FlatItem>
        )}
      />
    </Container>
  );
};

export default Home;
