import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';

export default function App() {
  const [result, setResult] = React.useState(0);
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');

  return (
    <View style = {styles.container}>
      <View style = {styles.container}>
      <Text style = {styles.alertText}>Result = {result}</Text>
        <TextInput 
          keyboardType = 'numeric'
          value = {num1}
          onChangeText = {txt => setNum1(txt)}
          style={styles.input}
        />
        <TextInput 
          keyboardType = 'numeric'
          value = {num2}
          onChangeText = {txt => setNum2(txt)}
          style={styles.input}
        />
      </View>
      <View style = {styles.buttonContainer}>
        <Button title = '+' onPress={() => setResult(parseFloat(num1) + parseFloat(num2))}/>
        <Button title = '-' onPress={() => setResult(parseFloat(num1) - parseFloat(num2))}/>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
      flex: 5,
      width: 100,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
  alertText: {
    fontSize: 18
  },
  input: {
    width:200, 
    borderColor:'gray', 
    borderWidth:1
  }
});
