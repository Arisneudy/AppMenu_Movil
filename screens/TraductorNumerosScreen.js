import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

import traducirNumero from "../tools/ConvertirNumeroALetra";

const TraductorNumerosScreen = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const num = parseInt(number, 10);
    if (number >= 1 && number <= 1000) {
      setResult(traducirNumero(num));
    } else {
      setResult("");
      Alert.alert(
        "Error",
        "Por favor, debes ingresar un numero que este dentro del rango.",
        [{ text: "OK" }]
      );
      return;
    }
  };

  const handleClear = () => {
    setNumber("");
    setResult("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Convertir numeros a letra</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese un numero entre 1 y 1000"
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
          />

          {result === "" ? (
            <TouchableOpacity style={styles.button} onPress={handleConvert}>
              <Text style={styles.buttonText}>Convertir</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleConvert}>
                <Text style={styles.buttonText}>Convertir</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClear}
              >
                <Text style={styles.buttonText}>Limpiar</Text>
              </TouchableOpacity>
            </View>
          )}

          {result !== "" && (
            <Text style={styles.resultText}>Resultado: {result}</Text>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    marginBottom: 25,
    color: "#555",
  },
  input: {
    width: "75%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    textAlign: "center",
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  button: {
    width: 100,
    marginTop: 10,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  clearButton: {
    width: 120,
    marginTop: 10,
    backgroundColor: "#ae0101",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    gap: 15,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});

export default TraductorNumerosScreen;
