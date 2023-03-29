import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import { FlatList } from "react-native-gesture-handler";


export default function App() {
  const listas1 = ["Redes", "POO", "Redes 2", "Redes 3", "AWS"];
  const listas2 = ["Calculo", "Contabilidad", "React", "Angular", "CSS"];
  let numeroLista = 0;
  let encab = false
  l
  const Materias = (props) => {
    return (
      <View>
        <Text style={styles.materias}>
          {props.nombre}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
    <Text >{"Ingresa El numero de lista"}</Text>
    <TextInput
        style={styles.disenhoCaja}
        onChangeText={(newText) => (numeroLista = newText)}
        placeholder={"Mostrar lista"}
      />
      <Button
        onPress={() => {
        
          }
        }
        title={"Revisar materia"}
      />
      <Text>{"Lista Materias"}</Text>
      <FlatList
       
        data={listas1}
        renderItem={({ item }) => <Materia nombre={item.key} found={item.found} />}
      />
      <FlatList
       
       data={listas2}
       renderItem={({ item }) => <Materia nombre={item.key} found={item.found} />}
     />
     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  materias: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontStyle: "italic",
    color: "#25306b",
    borderWidth:1,
    borderRadius:10
  },scroll: {
    borderColor: "fffff",
    
    height: 400,
    width: 300,
  },disenhoCaja: {
    margin: 10,
    fontSize: 18,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
  }
});


/*import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;*/



/*import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;*/


/*import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'ISC',
    data: ['Fundamentos de programacion', 'Bases de datos ', 'Programacion movil hibridas'],
  },
  {
    title: 'ITICS',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'IGE',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;*/




/*import React, { useState } from 'react';
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

export default App;*/




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
