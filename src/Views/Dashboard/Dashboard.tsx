import { ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button/Button';
import products from '../../../helpers/detail.json';
import { ProductContainer } from '../../components/ProductContainer/ProductContainer';
import { Props } from '../../routes/types';

export const Dashboard = ({ navigation, route }: Props) => {
  const { onLogout } = useAuth();
  // const [productList, setProductList] = useState<any>([]);

  const handleLogout = async () => {
    console.log('hello');

    await onLogout();
  };

  const onHandlerProduct = (prod) => {
    navigation.navigate('ProductDetails', { ...prod });
  };

  // const productData = products.result.filter((prop, index) => {
  //   return prop.produtos[].nomeproduto
  // });
  // console.log(productData);

  const extractProductNames = () => {
    const names = [];
    for (const result of products.result) {
      for (const product of result.produtos) {
        names.push({
          produto_id: product.produto_id,
          nomeProduto: product.nomeproduto,
          valorUnitario: product.valorunitario,
          quantidade: product.quantidade,
          codigoProduto: product.codigoproduto,
        });
      }
    }
    return names;
  };

  // useEffect(() => {
  //   // setProductList(extractProductNames(products));
  // }, []);

  // console.log(productList);

  return (
    <View
      style={{
        backgroundColor: '#151515',
        width: useWindowDimensions().width,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Text>Dashboard</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderWidth: 2,
          borderColor: 'white',
          height: 550,
          width: useWindowDimensions().width,
          paddingVertical: 10,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              width: useWindowDimensions().width * 0.8,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
            key={Math.random()}
          >
            {extractProductNames().map((prod) => {
              return (
                <ProductContainer
                  key={Math.random() + Date.now()}
                  onPress={() => onHandlerProduct(prod)}
                  productName={prod.nomeProduto}
                  ProductPrice={prod.valorUnitario}
                  productAmount={prod.quantidade}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <Button
        onPress={handleLogout}
        buttonColor={'#ffff'}
        textColor={'#ff3300'}
        buttonText={'logout'}
      />
    </View>
  );
};
