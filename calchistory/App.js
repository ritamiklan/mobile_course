import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList } from 'react-native';

export default function App() {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [data, setData] = useState([]);

  const addNumbers = () => {
    let res1 = parseFloat(num1) + parseFloat(num2)
    let history = `${num1} + ${num2} = ${res1}`
    setResult(res1)
    setData([history, ...data])
  }

  const substractNumbers = () => {
    let res2 = parseFloat(num1) - parseFloat(num2)
    let history2 = `${num1} - ${num2} = ${res2}`
    setResult(res2)
    setData([history2, ...data])
  }

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
        <Button title = '+' onPress={addNumbers}/>
        <Button title = '-' onPress={substractNumbers}/>
      </View>
      <View style = {styles.container}>
        <FlatList 
        data = {data}
        renderItem = {({item}) => <Text>{item}</Text> }
        keyExtractor = {(item, index) => index}
        />
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
  input: {
    width:200, 
    borderColor:'gray', 
    borderWidth:1
  },
  buttonContainer: {
      flex: 1,
      width: 100,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },
  alertText: {
    fontSize: 18
  },
 
});