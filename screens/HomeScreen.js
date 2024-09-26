import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import Ft from "../assets/img.jpg";

const HomeScreen = () => {
  const handleEmailSend = () => {
    Linking.openURL("mailto:20221967@itla.edu.do");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido a mi aplicación!</Text>
      <Image borderRadius={150} source={Ft} style={styles.profileImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>Datos personales</Text>
        <Text style={styles.infoText}>
          <Text style={{ alignContent: "flex-start", fontWeight: "bold" }}>
            Nombre:{" "}
          </Text>
          Arisneudy Santana Pozo
        </Text>
        <Text style={styles.infoText}>
          <Text style={{ alignContent: "flex-start", fontWeight: "bold" }}>
            Edad:{" "}
          </Text>
          19 Años
        </Text>

        <TouchableOpacity style={styles.emailButton} onPress={handleEmailSend}>
          <Text style={styles.emailButtonText}>Enviar un correo</Text>
        </TouchableOpacity>
      </View>
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
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    marginBottom: 5,
  },
  emailButton: {
    marginTop: 15,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  emailButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomeScreen;
