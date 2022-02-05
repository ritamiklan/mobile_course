import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {

const [text, setText] = useState('');
const [data, setData] = useState([]);

const addItem = () => {}
  

console.log(text);

  return (
    <View style={styles.container}>
      <View style = {styles.container}>
        <Text>Add something:</Text>
        <TextInput 
        value = {text}
        style = {styles.input}
        onChangeText = {text => setText(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title = "Add"
        />
        <Button
          title = "Clear"
        />
      </View>
      <View style = {styles.container}>
        <FlatList />
      </View>
      <StatusBar style="auto" />
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
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flex: 1,
    width: 200,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  }
});
