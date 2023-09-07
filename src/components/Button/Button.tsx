import { ReactNode } from 'react';
import {
  Text,
  ColorValue,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface IButtonProps extends TouchableOpacityProps {
  buttonText: ReactNode;
  buttonColor: ColorValue;
  textColor: ColorValue;
}

function Button({
  buttonText,
  buttonColor = '#006816',
  textColor = '#ffff',
  ...props
}: IButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: buttonColor,
        width: 140,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: textColor,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
