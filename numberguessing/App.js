import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [randomNr, setRandomNr] = useState(0);
  const [guess, setGuess] = useState('');

  useEffect(() => {
    setRandomNr(Math.floor(Math.random() * 100) + 1);
  }, []);
  
  console.log(randomNr);
  console.log(guess);

  const checkGuess = () => {
    console.log("This button works");
  }

  return (
    <View style={styles.container}>
      <Text>Guess the number between 1-100:</Text>
      <TextInput 
          keyboardType = 'numeric'
          value = {guess}
          onChangeText = {txt => setGuess(txt)}
          style={styles.input}
        />
        <Button
        onPress = {checkGuess}
        title = "Make a guess"
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200, 
    borderColor:'gray', 
    borderWidth:1
  }
});
