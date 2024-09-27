import React, { useState, useRef, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";

const ExperienciaPersonalScreen = () => {
  
  const onFullScreenChange = useCallback((isFullScreen) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Experiencia Personal</Text>
      <YoutubeIframe
        videoId="S75Iss_9i38"
        width={"100%"}
        height={250}
        onFullScreenChange={onFullScreenChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default ExperienciaPersonalScreen;
