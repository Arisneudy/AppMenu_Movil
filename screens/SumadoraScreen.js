import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const SumadoraScreen = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleSum = () => {
    if (!num1 || !num2) {
      Alert.alert("Error", "Por favor, debes ingresar ambos números.", [
        { text: "OK" },
      ]);
      return;
    }

    const suma = parseFloat(num1) + parseFloat(num2);
    setResult(suma);
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Calculadora para Sumar</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el primer numero"
            keyboardType="numeric"
            value={num1}
            onChangeText={(text) => setNum1(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Ingrese el segundo numero"
            keyboardType="numeric"
            value={num2}
            onChangeText={(text) => setNum2(text)}
          />

          {result === "" ? (
            <TouchableOpacity style={styles.button} onPress={handleSum}>
              <Text style={styles.buttonText}>Sumar</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSum}>
                <Text style={styles.buttonText}>Sumar</Text>
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

export default SumadoraScreen;
