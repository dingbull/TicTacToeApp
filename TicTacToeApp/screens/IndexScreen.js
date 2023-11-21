import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IndexScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile App Development (CPRG303-A)</Text>
      <Text style={styles.subtitle}>Welcome to Tic Tac Toe App</Text>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Game')} // Navigate to Game Screen
        color="#4285f4" // Button color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ea4335', // Text color
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 24,
    color: '#fbbc05', // Text color
  },
  button: {
    backgroundColor: '#4285f4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default IndexScreen;
