import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([text, ...data]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <TextInput
        value = {text}
        style={styles.input}
        onChangeText = {text => setText(text)}
      />
      <Button onPress={addItem} title="Press me"/>
      <FlatList 
        data = {data}
        renderItem = {({item}) => <Text>{item}</Text> }
        keyExtractor = {(item, index) => index}
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
    marginTop: 50,
    width: 200, 
    borderColor: "gray", 
    borderWidth: 1
  }
});
