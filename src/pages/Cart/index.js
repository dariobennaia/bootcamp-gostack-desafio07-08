import React from 'react';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';
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

function Cart() {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    const { id, amount } = product;
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }

  function decrement(product) {
    const { id, amount } = product;
    dispatch(CartActions.updateAmountRequest(id, amount - 1));
  }

  function handleRemoveFromCart(id) {
    dispatch(CartActions.removeFromCart(id));
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
            <RectButton onPress={() => handleRemoveFromCart(item.id)}>
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

export default Cart;
