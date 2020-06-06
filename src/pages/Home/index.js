import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
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

function Home() {
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

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

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderItem(product) {
    const { item } = product;
    return (
      <>
        <ProductItem>
          <ProductImage source={{ uri: item.image }} />
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormatted}</ProductPrice>

          <ProductButton onPress={() => handleAddToCart(item.id)}>
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

export default Home;
