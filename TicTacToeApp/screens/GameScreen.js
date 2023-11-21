// GameScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const GameScreen = ({ navigation }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handlePress = (index) => {
    if (board[index] || checkForWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    if (checkForWinner(newBoard)) {
      Alert.alert(`Player ${currentPlayer} wins!`);
      return;
    }
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const checkForWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const renderCell = (index) => {
    return (
      <TouchableOpacity 
        style={styles.cell} 
        onPress={() => handlePress(index)}
        key={index}
      >
        <Text style={styles.cellText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIC TAC TOE</Text>
      <Text style={styles.body}>First Player starts as</Text>
      <Text style={styles.h2}>Player X</Text>
      <Text style={styles.body}>And Second Player as</Text>
      <Text style={styles.h2}>Player 0</Text>
      <View style={styles.gameBoard}>
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </View>
      <Text style={styles.h3}></Text>
      <Text style={styles.h4}>Game starts by Tap on box</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GameOver')} // Navigate to GameOver Screen
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

  },

  baseText: {
    fontFamily: 'Cochin',
},
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ea4335',
    fontWeight: 'bold',

  },
  h1: {
    fontSize: 24,
    marginBottom: 10,
    color: '#ea4335',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fbbc05',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 4,
    marginBottom: 10,
    color: '#4285f4',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 18,
    marginBottom: 10,
    color: '#34a853',
    fontWeight: 'bold',
  },

  body: {
    fontSize: 14,
    marginBottom: 10,
    color: '#000000',
    fontWeight: 'bold',
  },

  gameBoard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
  },
  cell: {
    width: '33%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  cellText: {
    fontSize: 30,
  },
  button: {
    marginTop: 20,
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

export default GameScreen;
