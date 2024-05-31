import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Photo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Working in Progress Coming Soon.
      </Text>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200

  },
  text: {
    color: 'white',
    textAlign: 'center', 
  },
});
