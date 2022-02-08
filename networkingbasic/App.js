import { StyleSheet, Text, TextInput, View, Button, Alert, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchData = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => response.json())
    .then(data => setRepositories(data.items))
    .catch(err => Alert.alert('Something went wrong', err))
  }

  const listSeparator = () => {
    return (
      <View style={styles.separator} />
    )
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.alertTxt}>Keyword:</Text>
      <TextInput 
        placeholder = ' keyword'
        style = {styles.input}
        onChangeText = {text => setKeyword(text)}
      />
    <Button
      title = 'Search'
      onPress = {fetchData}
    />
    <FlatList
      data = {repositories}
      keyExtractor = {item => item.id}
      ItemSeparatorComponent = {listSeparator}
      renderItem = {({item}) =>
        <View style = {styles.listItem}>
          <Text style = {styles.alertTxt}>{item.full_name}</Text>
          <Text>{item.description}</Text>
        </View>
      }
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'grey'
  },
  alertTxt: {
    fontSize: 18, 
    fontWeight: "bold"
  },
  separator: {
    height: 1,
    width: "80%",
    backgroundColor: "#CED0CE",
    marginLeft: "10%"
  },
  listItem: {
    margin: 5,
    fontSize: 14
  }
});