import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      {/* Add your favourite items or any other content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Add more styles as needed
});

export default Favourites;
