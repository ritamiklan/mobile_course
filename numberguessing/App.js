import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [randomNr, setRandomNr] = useState(0);
  const [guess, setGuess] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setRandomNr(Math.floor(Math.random() * 100) + 1);
  }, []);
  
  console.log(randomNr);
  console.log(guess);

  const checkGuess = () => {
    if (randomNr > guess ) {
      return setMsg("Guess too small")
    } else if (randomNr < guess) {
      return setMsg("Guess too big")
    } else {
      return setMsg("You guessed the nr!")
    }
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
        <Text>{msg}</Text>
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
