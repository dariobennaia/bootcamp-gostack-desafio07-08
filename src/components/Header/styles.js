import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #17161b;
  padding: 10px;
`;

export const Logo = styled.Image`
  height: 23px;
  width: 180px;
`;

export const Cart = styled(RectButton)`
  display: flex;
  flex-direction: row;
`;

export const Basket = styled(Icon)`
  position: absolute;
`;

export const Badge = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 5px;
  height: 18px;
  background: #7159c1;
  margin-left: 15px;
`;

export const TextBadge = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 11px;
`;
