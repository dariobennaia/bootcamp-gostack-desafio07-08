import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Content,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductButtonIcon,
  ProductButtonTitle,
  QuatityProduct,
  SeparatorItems,
} from './styles';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const { data } = await api.get('products');

    const productsData = data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(productsData);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function renderItem(product) {
    const { item } = product;
    return (
      <>
        <ProductItem>
          <ProductImage source={{ uri: item.image }} />
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormatted}</ProductPrice>

          <ProductButton onPress={() => addToCartRequest(item.id)}>
            <ProductButtonIcon>
              <Icon name="shopping-basket" size={16} color="#fff" />
              <QuatityProduct>{amount[item.id] || 0}</QuatityProduct>
            </ProductButtonIcon>
            <ProductButtonTitle>ADICIONAR AO CARRINHO</ProductButtonTitle>
          </ProductButton>
        </ProductItem>
        <SeparatorItems />
      </>
    );
  }

  return (
    <Container>
      <Content>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          horizontal
        />
      </Content>
    </Container>
  );
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
