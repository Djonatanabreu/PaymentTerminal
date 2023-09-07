import {
  Image,
  ImageSourcePropType,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

import dogPicture from '../../../../assets/dog.jpg';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import { NativeModules } from 'react-native';

export const ProductDetails = ({ route }: any) => {
  const [product, setProduct] = useState();
  const { It4rModule } = NativeModules;

  const onHandlerBuyProduct = () => {
    It4rModule.printEvent(product);
  };

  useEffect(() => {
    if (route.params) {
      setProduct(route.params);
    }
  }, []);
  console.log(route.params);

  return (
    <View
      style={{
        backgroundColor: '#151515',
        width: useWindowDimensions().width,
        alignItems: 'center',
        height: useWindowDimensions().height,
        padding: useWindowDimensions().width * 0.02,
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          marginVertical: 10,
          alignSelf: 'center',
          textAlign: 'center',
        }}
      >
        {product?.nomeProduto}
      </Text>
      <View
        style={{ borderWidth: 2, borderColor: '#fff', width: 320, height: 200 }}
      >
        <Image
          style={{ width: 320, height: 200 }}
          resizeMode='cover'
          source={dogPicture as ImageSourcePropType}
        />
      </View>
      <View style={{ marginVertical: 55 }}>
        <Text
          style={{
            color: '#00ff22',
            fontSize: 24,
            marginVertical: 10,
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          R$: {product?.valorUnitario}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            marginVertical: 10,
            alignSelf: 'center',
            textAlign: 'center',
          }}
        >
          Quantidade: x{product?.quantidade}
        </Text>
      </View>
      <Button
        onPress={onHandlerBuyProduct}
        style={{ marginTop: 50 }}
        buttonColor={'#00dd00'}
        buttonText='Comprar'
        textColor={'#fff'}
      />
    </View>
  );
};
