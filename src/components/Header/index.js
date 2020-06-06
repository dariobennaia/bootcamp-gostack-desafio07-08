import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Logo, Cart, Basket, Badge, TextBadge } from './styles';
import logo from '../../assets/logo.png';

function Header({ navigation, cartSize }) {
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
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
