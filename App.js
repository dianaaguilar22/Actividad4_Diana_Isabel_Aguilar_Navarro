import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [materia, setMateria] = useState("elegir materia");
  const [materia2, setMateria2] = useState("elegir materia");
  const [materia3, setMateria3] = useState("elegir materia");
  const [mostrar, setMostrar] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Materias</Text>
      <TextInput
        style={styles.cajaTexto}
        defaultValue={materia}
        onChangeText={(newText) => setMateria(newText)}
      />
      <TextInput
        style={styles.cajaTexto}
        defaultValue={materia2}
        onChangeText={(newText) => setMateria2(newText)}
      />
      <TextInput
        style={styles.cajaTexto}
        defaultValue={materia3}
        onChangeText={(newText) => setMateria3(newText)}
      />
      <Button
        onPress={() => {
          setMostrar(!mostrar);
        }}
        title={"Materias seleccionadas"}
      />
      <Text>{mostrar ? materia:""}</Text>
      <Text>{mostrar ? materia2:""}</Text>
      <Text>{mostrar ? materia3:""}</Text>
        
    
      <StatusBar style="auto" />
    </View>
  );
  /*const [materia, setMateria] = useState("Inscribirse a materia");

  const Materias = (props) => {
    return (
      <View>
        <Text>{props.nombre}</Text>
      </View>
    );
  };

  const getDatosAlumno = (nombre, carrera, especialidad) => {
    return nombre + " " + carrera + " " + especialidad;
  };

  return (
    <View style={styles.container}>
      <Text>Hola {getDatosAlumno("Dianis", "ISC", "FullStack")} </Text>
      <TextInput
        style={styles.cajaTexto}
        defaultValue="Nombre de materia"
        onChangeText={(newText) => setMateria(newText)}
        defaultValuee={materia}
      />
      <Text>MATERIAS</Text>
      <Materias nombre={materia} />
      <Materias nombre="Administración de Redes" />
      <Materias nombre="Arquitectura de Servicios" />
      <Materias nombre="Aplicaciones moviles"/>

      <StatusBar style="auto" />
    </View>
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cajaTexto: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    minWidth: 200,
  },
});
