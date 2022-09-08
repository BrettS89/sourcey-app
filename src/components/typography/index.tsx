import { View, Text, StyleSheet } from 'react-native';
import colors from '../../shared/colors';

interface Props {
  styles?: Record<string, any>;
}

const Typography: React.FC<Props> = (props) => {
  const textStyles = { ...style.text, ...(props.styles || {}) }

  return (
    <View>
      <Text style={textStyles}>
        {props.children}
      </Text>
    </View>
  );
};

export default Typography;

const style = StyleSheet.create({
  text: {
    color: colors.text
  },
});