import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [keyword, setKeyword] = useState('');
  const [recipes, setRecipes] = useState('');

  const getRecipes = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
    .then(response => response.json())
    .then(responseJson => setRecipes(responseJson.meals))
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Ingredient: {keyword}</Text>
          <TextInput
            style = {styles.input}
            placeholder = 'keyword'
            onChangeText={ text => setKeyword(text)}
          />
      </View>
      <View style = {styles.buttonContainer}>
        <Button
          title = 'Find recipe'
          onPress = {getRecipes}
        />
      </View>
      <View style = {styles.container2}>
        <FlatList 
          data = {recipes}
          renderItem={({item}) => 
            <View>
              <Text>{item.strMeal}</Text>
              <Image
                style={{ width: 50, height: 50 }} 
                source={{ uri: `${item.strMealThumb}` }} 
              />
            </View>
          }
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
    justifyContent: 'center',
  },
  container2: {
    flex: 4,
    width: 350,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: 'grey'
  },
  buttonContainer: {
    flex: 1,
    width: 400,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
