import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [materiaData, setMateriaData] = useState([
    { key: 'Materia 1' },
    { key: 'Materia 2' },
    { key: 'Materia 3' },
    { key: 'Materia 4' },
    { key: 'Materia 5' },
    { key: 'Materia 6' },
    { key: 'Materia 7' },
    { key: 'Materia 8' },
    { key: 'Materia 9' },
    { key: 'Materia 10' }
  ]);

  const [searchText, setSearchText] = useState('');

  const searchMateria = () => {
    const newData = materiaData.map((materia) => {
      if (materia.key.toLowerCase().includes(searchText.toLowerCase())) {
        return { ...materia, found: true };
      } else {
        return { ...materia, found: false };
      }
    });
    setMateriaData(newData);
  };

  const Materia = ({ nombre, found }) => {
    return (
      <View style={[styles.item, found && styles.found]}>
        <Text style={[styles.text, found && styles.foundText]}>{nombre}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Materias</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar Materia"
          onChangeText={(text) => setSearchText(text)}
        />
        <Button title="Buscar" onPress={searchMateria} />
      </View>
      <FlatList
        style={styles.list}
        data={materiaData}
        renderItem={({ item }) => <Materia nombre={item.key} found={item.found} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
  found: {
    backgroundColor: '#f8d7da',
  },
  foundText: {
    color: '#721c24',
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
    width: '70%',
  },
});

export default App;




/*import React, { useState } from "react";
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
  
  const materias = () => {
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
          materias();
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
  
  
}*/
