import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "./config";

export default function App() {
  const [location, setLocation] = useState({
    // initial value shouldn't be null
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
      });
      console.log(location.coords.latitude); // this works it seems
      console.log(location.coords.longitude);
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
          // console.log(data, details);
          setLocation({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
          });
        }}
        query={{
          key: config.MAP_API_KEY,
          language: "en",
          components: "country:fi",
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: { flex: 0 },
          listView: { backgroundColor: "white" },
        }}
      />
      <MapView style={{ flex: 1 }} region={location} provider="google">
        <Marker coordinate={location} />
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

// region state, region prop
// text input
// press button: find coordinates, update reagon state
