import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [valores, setValores] = useState(["", "", "", ""]);
  const [media, setMedia] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (index, value) => {
    const newValores = [...valores];
    newValores[index] = value;
    setValores(newValores);
  };

  const calcularMedia = () => {
    const numeros = valores.map(Number);
    if (numeros.some(isNaN)) {
      alert("Por favor, insira apenas números válidos.");
      return;
    }
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const novaMedia = soma / 4;
    setMedia(novaMedia.toFixed(2));
    setStatus(novaMedia >= 6 ? "Aprovado" : "Reprovado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Média</Text>
      {valores.map((valor, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={(text) => handleChange(index, text)}
          placeholder={`Nota ${index + 1}`}
        />
      ))}
      <Button title="Calcular Média" onPress={calcularMedia} />
      {media !== null && (
        <View style={styles.resultado}>
          <Text>Média: {media}</Text>
          <Text style={status === "Aprovado" ? styles.aprovado : styles.reprovado}>{status}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 5,
    width: 100,
    textAlign: "center",
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
  },
  aprovado: {
    color: "green",
  },
  reprovado: {
    color: "red",
  },
});
