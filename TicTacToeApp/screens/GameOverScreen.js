// GameOverScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOverScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.subtitle}>Don't Give UP!</Text>
      <Button
        title="Play Again"
        onPress={() => navigation.navigate('Index')} // Navigate back to Index Screen
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
  

export default GameOverScreen;
