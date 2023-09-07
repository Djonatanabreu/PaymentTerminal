import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  useWindowDimensions,
} from 'react-native';

interface IProductCardProps extends TouchableOpacityProps {
  productName: string;
  ProductPrice: string;
  productAmount: string;
}

export const ProductContainer = ({
  productName,
  ProductPrice,
  productAmount,
  ...props
}: IProductCardProps) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} {...props}>
      <View
        style={{
          width: useWindowDimensions().width * 0.8,
          height: useWindowDimensions().width * 0.5,
          backgroundColor: '#00558D',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 8,
          padding: 6,
          marginVertical: 12,
        }}
      >
        <Text
          style={{
            fontSize: useWindowDimensions().width * 0.05,
            color: '#ffff',
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          {productName}
        </Text>
        <Text
          style={{
            fontSize: useWindowDimensions().width * 0.06,
            color: '#00ff99',
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          R$: {ProductPrice}
        </Text>
        <Text
          style={{
            fontSize: useWindowDimensions().width * 0.05,
            color: '#ffff',
            textTransform: 'capitalize',
            textAlign: 'center',
            alignSelf: 'flex-end',
          }}
        >
          x{productAmount}
        </Text>
        <View>
          <Text
            style={{
              fontSize: useWindowDimensions().width * 0.05,
              color: '#ffff',
              textTransform: 'capitalize',
              textAlign: 'center',
              alignSelf: 'flex-end',
            }}
          >
            Vizualizar Detalhes 🔍
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
