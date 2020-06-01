import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #17161b;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartList = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  max-height: 300px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CartItem = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  max-height: 350px;
  width: 100%;
`;

export const ItemHeader = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ItemImage = styled.Image`
  max-height: 100px;
  width: 30%;
`;

export const ItemDescription = styled.View`
  padding: 10px;
  width: 60%;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const DeleteItemCart = styled.View`
  align-items: center;
  width: 10%;
  justify-content: center;
`;

export const ItemAmount = styled.View`
  display: flex;
  flex-direction: row;
  background: #eee;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Amount = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InputAmount = styled.TextInput`
  height: 30px;
  border: 1px solid #3333;
  font-size: 8px;
  color: #333;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
`;

export const SubTotal = styled.Text`
  font-weight: bold;
`;

export const Footer = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const CartTotal = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const TotalTitle = styled.Text`
  color: #333;
`;

export const TotalPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const FinishCartButton = styled(RectButton)`
  background: #7159c1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
`;

export const FinishCartButtonTitle = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const TextCartEmpty = styled.Text`
  color: #333;
  font-weight: bold;
`;
