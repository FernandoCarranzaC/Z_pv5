import React,{useState} from "react";
import { StyleSheet,View, Text,TextInput} from "react-native";
import Instructor_Titulo from "../../Components/Instructor/Instructor/Instructor_Titulo";
import Instructor_Imagen from "../../Components/Instructor/Instructor/Instructor_Imagen";
import Instructor_BotonIngreso from "../../Components/Instructor/Instructor/Instructor_BotonIngreso";
import { ScrollView } from "react-native-gesture-handler";

export default function Instructor() {
  const[txtclavePers, setclavePers]= useState('Escribe número de Tarjeta')
  const[ttclavePers, ssetclavePers]= useState('Escribe número de Tarjeta...')
  return(
    <View>
      <Instructor_Titulo/>
      <ScrollView>
      <Instructor_Imagen/>
      <View style={styles.viewBody}>
      <Text style={styles.textoutput}>NO. TARJETA: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = {ttclavePers}
          placeholderTextColor = "#B9770E"
          autoCapitalize = "none"
          autoCapitalize='characters' 
          onChangeText = {(c)=>setclavePers(c)} 
      /> 
      </View>
      <Instructor_BotonIngreso clavePers={txtclavePers}/>
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
    borderColor: '#D4AC0D',
    borderWidth: 1,
    color: '#B9770E' ,
    
 }
  
});