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

export const Content = styled.View`
  max-height: 355px;
`;

export const SeparatorItems = styled.View`
  width: 30px;
  max-height: 300px;
`;

export const ProductItem = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  max-height: 350px;
  width: 250px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  height: 150px;
  width: 150px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ProductButton = styled(RectButton)`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductButtonIcon = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const QuatityProduct = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const ProductButtonTitle = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
`;
