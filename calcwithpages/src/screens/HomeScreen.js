import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {

return (
    <View style={styles.container}>
        <View style={styles.container}>
            <Text>text textttt</Text>
            <TextInput style = {styles.input} />
            <TextInput style = {styles.input} />
        </View>
        <View style = {styles.buttonContainer}>
            <Button title = '+' />
            <Button title = '-' />
            <Button title = 'History' onPress={() => navigation.navigate('History')} />
        </View>
        <StatusBar style="auto" />
    </View>
    )
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
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
          flexDirection: 'row',
          width: 200,
          backgroundColor: '#fff',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }
      });