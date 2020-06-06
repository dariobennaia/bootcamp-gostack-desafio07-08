import React from 'react';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../utils/format';
import {
  Container,
  CartList,
  CartItem,
  ItemHeader,
  ItemImage,
  ItemDescription,
  DeleteItemCart,
  ItemTitle,
  ItemPrice,
  ItemAmount,
  Amount,
  InputAmount,
  SubTotal,
  Footer,
  CartTotal,
  TotalTitle,
  TotalPrice,
  FinishCartButton,
  FinishCartButtonTitle,
  TextCartEmpty,
} from './styles';

function Cart({ removeFromCart, updateAmountRequest, cart, total }) {
  function increment(product) {
    const { id, amount } = product;
    updateAmountRequest(id, amount + 1);
  }

  function decrement(product) {
    const { id, amount } = product;
    updateAmountRequest(id, amount - 1);
  }

  function renderItem(product) {
    const { item } = product;
    return (
      <CartItem>
        <ItemHeader>
          <ItemImage source={{ uri: item.image }} />
          <ItemDescription>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>{item.priceFormated}</ItemPrice>
          </ItemDescription>
          <DeleteItemCart>
            <RectButton onPress={() => removeFromCart(item.id)}>
              <Icon name="delete" size={20} color="#7159c1" />
            </RectButton>
          </DeleteItemCart>
        </ItemHeader>
        <ItemAmount>
          <Amount>
            <RectButton onPress={() => decrement(item)}>
              <Icon name="remove-circle-outline" size={16} color="#7159c1" />
            </RectButton>
            <InputAmount value={String(item.amount)} />
            <RectButton onPress={() => increment(item)}>
              <Icon name="add-circle-outline" size={16} color="#7159c1" />
            </RectButton>
          </Amount>
          <SubTotal>{item.subTotal}</SubTotal>
        </ItemAmount>
      </CartItem>
    );
  }

  return (
    <Container>
      <CartList>
        {(cart.length > 0 && (
          <>
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={(item, index) => String(index)}
            />
            <Footer>
              <CartTotal>
                <TotalTitle>Total</TotalTitle>
                <TotalPrice>{total}</TotalPrice>
              </CartTotal>
              <FinishCartButton>
                <FinishCartButtonTitle>FINALIZAR PEDIDO</FinishCartButtonTitle>
              </FinishCartButton>
            </Footer>
          </>
        )) || (
          <>
            <Icon name="remove-shopping-cart" size={40} color="#333" />
            <TextCartEmpty>Carrinho Vazio</TextCartEmpty>
          </>
        )}
      </CartList>
    </Container>
  );
}

Cart.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.any).isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
