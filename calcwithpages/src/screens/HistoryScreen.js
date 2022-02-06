import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HistoryScreen({ route }) {

const { data } = route.params;

    return(
        <View style = {styles.container}>
            <Text style = {styles.largeText}>History screen</Text>
                <FlatList 
                    data = {data}
                    renderItem = {({item}) => <Text>{item}</Text> }
                    keyExtractor = {(item, index) => index}
                />
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
        largeText: {
            margin: 20,
            fontSize: 20,
        }
    });
