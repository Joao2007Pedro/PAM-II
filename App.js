import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const HomeScreen = ({ setScreen }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" }} 
      style={styles.image} 
    />
    <Text style={styles.title}>Alan Turing</Text>
    <Text style={styles.subtitle}>O pai da computação moderna</Text>
    <View style={styles.buttonContainer}>
      <Button title="Biografia" onPress={() => setScreen("Biografia")} color="#1E90FF" />
      <Button title="Curiosidades" onPress={() => setScreen("Curiosidades")} color="#1E90FF" />
    </View>
  </View>
);

const BiografiaScreen = ({ setScreen }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Biografia</Text>
    <Text style={styles.text}>
      Alan Turing foi um matemático, lógico e cientista da computação britânico.
      Ele foi fundamental para decifrar os códigos da máquina Enigma na Segunda Guerra Mundial.
    </Text>
    <Button title="Voltar" onPress={() => setScreen("Home")} color="#DC143C" />
  </View>
);

const CuriosidadesScreen = ({ setScreen }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Curiosidades</Text>
    <Text style={styles.text}>
      - Turing criou o conceito de máquina universal, base dos computadores modernos.
      - Foi processado por sua homossexualidade em 1952 e sofreu perseguição.
      - Seu trabalho ajudou a encurtar a Segunda Guerra Mundial em pelo menos dois anos.
    </Text>
    <Button title="Voltar" onPress={() => setScreen("Home")} color="#DC143C" />
  </View>
);

export default function App() {
  const [screen, setScreen] = React.useState("Home");

  return (
    <View style={styles.container}>
      {screen === "Home" && <HomeScreen setScreen={setScreen} />}
      {screen === "Biografia" && <BiografiaScreen setScreen={setScreen} />}
      {screen === "Curiosidades" && <CuriosidadesScreen setScreen={setScreen} />}
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#1E90FF",
    marginBottom: 15,
  },
});