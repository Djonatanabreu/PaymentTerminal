import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Dashboard: any;
  Login: any;
  ProductDetails: any;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
