import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([text, ...data])
    setText('')
  }

  const clearItems = () => {
    setData([])
    setText('')
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.container}>
        <Text>Add Shopping list item:</Text>
        <TextInput 
        value = {text}
        style = {styles.input}
        onChangeText = {text => setText(text)}
        />
      </View>
      <View style = {styles.buttonContainer}>
        <Button
          title = "Add"
          onPress={addItem}
        />
        <Button
          title = "Clear"
          onPress={clearItems}
        />
      </View>
      <View style = {styles.container2}>
        <Text style = {styles.alertText}>
          Shopping list
        </Text>
        <FlatList 
          data = {data}
          renderItem = {({item}) => <Text>{item}</Text> }
          keyExtractor = {(item, index) => index}
        />
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
      justifyContent: 'center'
    },
    container2: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
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
      justifyContent: 'space-around'
    },
    alertText: {
      fontWeight: 'bold',
      color: 'blue'
    }
});
