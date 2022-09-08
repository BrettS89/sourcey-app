import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../shared/colors';
import Typography from '../typography';

interface Props {
  title: string;
  moreStyles?: Record<string, any>;
}

const PageTitle: React.FC<Props> = ({ moreStyles={}, title }) => {
  return (
    <View>
      <Typography styles={styles.title}>
        {title}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: 22,
    fontWeight: '900',
    color: colors.background
  }
});

export default PageTitle;
