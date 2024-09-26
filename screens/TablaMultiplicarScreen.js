import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Multiplicar from "../tools/MultiplicarNumero";

const TablaMultiplicarScreen = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState([]);

  const handleMultiply = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      const tabla = Multiplicar(num, 13);
      setResult(tabla);
    } else {
      Alert.alert("Error", "Por favor, ingresa un número válido.", [
        { text: "OK" },
      ]);
    }
  };

  const handleClear = () => {
    setNumber("");
    setResult([]);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Tabla de Multiplicar</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese un número para multiplicar"
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
          />

          {result.length === 0 ? (
            <TouchableOpacity style={styles.button} onPress={handleMultiply}>
              <Text style={styles.buttonText}>Mostrar Tabla</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleMultiply}>
                <Text style={styles.buttonText}>Mostrar Tabla</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.clearButton}
                onPress={handleClear}
              >
                <Text style={styles.buttonText}>Limpiar</Text>
              </TouchableOpacity>
            </View>
          )}

          {result.length > 0 && (
            <Text style={styles.resultTextTitle}>Resultado:</Text>
          )}

          <ScrollView style={styles.resultContainer}>
            {result.length > 0 &&
              result.map((item, index) => (
                <Text key={index} style={styles.resultText}>
                  {item}
                </Text>
              ))}
          </ScrollView>
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
  resultContainer: {
    marginTop: 20,
    width: "100%",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  resultTextTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 5,
  },
  button: {
    width: 150,
    marginTop: 10,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  clearButton: {
    width: 150,
    marginTop: 10,
    backgroundColor: "#ae0101",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 15,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});

export default TablaMultiplicarScreen;
