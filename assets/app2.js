import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
export default function App() {
 const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: "#fff",
 alignItems: "center",
 justifyContent: "center",
 },
 disenhoCaja:{
 margin:10,
 fontSize:18,
 textAlign:"center",
 borderWidth:1,
 borderRadius:3,
 padding:5

 },
 titulo:{
 fontSize:30,
 fontWeight:"bold",
 margin:10
 },
 topbar:{
 fontSize:30,
 fontWeight:"bold",
 margin:20,
 width:500,
 backgroundColor:"#b0c9cf",
 textAlign:"center"
 },
 materias:{
 fontSize:30,
 textAlign:"center",
 margin:10,
 fontStyle:'italic',
 color:'#25306b'
 },
 indicador:{
 textAlign:"left",
 width:200
 }
 });
 const [materia, setMateria] = useState("");
 const [materia2, setMateria2] = useState("");
 const [materia3, setMateria3] = useState("");
 const [activo, setMostrar] = useState(false);
 return (
 <View style={styles.container}>
 <Text style={styles.topbar}>{"Resgistro de Materias"}</Text>
 <Text style={styles.indicador}>{'Materia 1'}</Text>
 <TextInput
 style={styles.disenhoCaja}
 defaultValue={materia}
 onChangeText={(newText) => setMateria(newText)}
 placeholder={"Registra la materia 1"}
 />
 <Text style={styles.indicador}>{'Materia 2'}</Text>
 <TextInput
 style={styles.disenhoCaja}
 defaultValue={materia2}
 onChangeText={(newText) => setMateria2(newText)}
 placeholder={"Registra la materia 2"}
 />
 <Text style={styles.indicador}>{'Materia 3'}</Text>

 <TextInput
 style={styles.disenhoCaja}
 defaultValue={materia3}
 onChangeText={(newText) => setMateria3(newText)}
 placeholder={"Registra la materia 3"}
 />
 <Button

 onPress={() => {
 setMostrar(!activo);
 }}
 disabled={activo}
 title={"Mostrar materias"}

 />
 <View>
 {activo ? (

 <View>
 <Text style={styles.titulo}>{"Materias Inscritas"}</Text>
 <Text style={styles.materias}>{'1- '+materia}</Text>
 <Text style={styles.materias}>{'2- '+materia2}</Text>
 <Text style={styles.materias}>{'3- '+materia3}</Text>
 </View>
 ) : (
 <Text>{""}</Text>
 )}
 </View>
 <StatusBar style="auto" />
 </View>
 );
}