import React,{useState} from "react";
import { StyleSheet,View, Text,TextInput} from "react-native";
import Estudiante_Titulo from "../../Components/Estudiante/Estudiante/Estudiante_Titulo";
import Estudiante_Imagen from "../../Components/Estudiante/Estudiante/Estudiante_Imagen";
import Estudiante_BotonIngreso from "../../Components/Estudiante/Estudiante/Estudiante_BotonIngreso";
import { ScrollView } from "react-native-gesture-handler";

export default function Estudiante() {
  const[txtclaveEstudiante, setclaveEstudiante] = useState('Escribe Numero de Control')
  const[ttclaveEstudiante, ssetclaveEstudiante] = useState('Escribe Numero de Control...')
  return(
    <View>
      <Estudiante_Titulo/>
      <ScrollView>
      <Estudiante_Imagen/>
      <View style={styles.viewBody}>
      <Text style={styles.textoutput}>NO. CONTROL DE ESTUDIANTE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {ttclaveEstudiante}
          placeholderTextColor = "#7FB3D5"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclaveEstudiante(c)} 
      /> 
      </View>
      <Estudiante_BotonIngreso numControl={txtclaveEstudiante}/>
      </ScrollView>
    </View>

   
    );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  marginBottom: 20,
  },
  textoutput:{
    fontWeight: "bold",
  },
  input: {
    
    margin: 15,
    height: 40,
    borderColor: '#5DADE2',
    borderWidth: 1,
    color: '#2980B9' ,
    
 }
  
});
