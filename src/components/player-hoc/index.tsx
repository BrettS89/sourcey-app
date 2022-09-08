import { View, Text, StyleSheet } from 'react-native';
import PlayerMini from '../player-mini';
import colors from '../../shared/colors';

const withPlayer = (WrappedComponent: any) => {
  return (props: any)=> {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <WrappedComponent {...props} />
        </View>
        <PlayerMini />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.background,
  }
})

export default withPlayer;