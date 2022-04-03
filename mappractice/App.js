import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { Alert } from "react-native-web";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "./config";

export default function App() {
  const [location, setLocation] = useState(null);
  // region state, region prop
  // text input
  // press button: find coordinates, update reagon state
  //coordinates: api, mapquest

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("No permission to get location");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesDetailsQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: config.MAP_API_KEY,
          language: "en",
          components: "country:fi",
        }}
        styles={{
          container: { flex: 0 },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView
        style={{ flex: 1 }}
        // Note! Use region prop instead of initialRegion when having region in state(dynamic map).
        initialRegion={{
          latitude: 60.200692,
          longitude: 24.934302,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
        provider="google"
      >
        <Marker
          coordinate={{ latitude: 60.201373, longitude: 24.934041 }}
          title="Haaga-Helia"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
