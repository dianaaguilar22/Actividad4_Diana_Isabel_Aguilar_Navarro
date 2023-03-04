import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "#2196F3",
      paddingVertical: 8,
      paddingHorizontal: 20,
    },
    headerText: {
      color: "#fff",
      fontSize: 25,
      textAlign: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      minWidth: 200,
    },
    button: {
      backgroundColor: "#2196F3",
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
      fontSize: 18,
    },
    resultText: {
      textAlign: "center",
      fontSize: 20,
    },
    cajaTexto: {
      margin: 10,
      fontSize: 18,
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
    },
  });

  const [materia1, setMateria1] = useState("");
  const [materia2, setMateria2] = useState("");
  const [materia3, setMateria3] = useState("");
  const [mostrar, setMostrar] = useState(false);
  
  const inscribirse = () => {
    setMostrar(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registro de Materias</Text>
      </View>
      <Text style={styles.indicador}>{"Primer materia"}</Text>
      <TextInput
        placeholder="Nombre de la materia 1"
        style={styles.cajaTexto}
        defaultValue={materia1}
        onChangeText={(newText) => setMateria1(newText)}
      />
      <Text style={styles.indicador}>{"Segunda materia"}</Text>
      <TextInput
        placeholder="Nombre de la materia 2"
        style={styles.cajaTexto}
        defaultValue={materia2}
        onChangeText={(newText) => setMateria2(newText)}
      />
      <Text style={styles.indicador}>{"Tercer materia"}</Text>
      <TextInput
        placeholder="Nombre de la materia 3"
        style={styles.cajaTexto}
        defaultValue={materia3}
        onChangeText={(newText) => setMateria3(newText)}
      />
      <Button
        onPress={() => {
          inscribirse();
        }}
        disabled={mostrar}
        title={"Materias seleccionadas"}
      />
      <View>
        {mostrar ? (
          <View>
            <Text style={styles.resultText}>{materia1}</Text>
            <Text style={styles.resultText}>{materia2}</Text>
            <Text style={styles.resultText}>{materia3}</Text>
          </View>
        ) : (
          <Text>{""}</Text>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
