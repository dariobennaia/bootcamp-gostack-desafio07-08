import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Logo, Cart, Basket, Badge, TextBadge } from './styles';
import logo from '../../assets/logo.png';

function Header({ navigation }) {
  const cartSize = useSelector((state) => state.cart.length);

  function navigate(page) {
    navigation.navigate(page, {});
  }

  return (
    <Container>
      <RectButton onPress={() => navigate('Home')}>
        <Logo source={logo} />
      </RectButton>
      <Cart onPress={() => navigate('Cart')}>
        <Basket name="shopping-basket" size={23} color="#fff" />
        <Badge>
          <TextBadge>{cartSize}</TextBadge>
        </Badge>
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
