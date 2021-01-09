import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";


export default function AddEstud_Datos() {
  return (
       
     <View>
      <Text style={styles.textoutput}>NO. CONTROL: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona el número de control..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleClave}
           autoCapitalize='characters' 
      /> 
      <Text style={styles.textoutput}>NOMBRE DEL ESTUDIANTE: </Text>
      <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Proporciona nombre del estudiante..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleNombrePersonal}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>CARRERA: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "Carrera del estudiante..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
       <Text style={styles.textoutput}>ID DE DEPARTAMENTO: </Text>
       <TextInput  style={styles.input} 
          underlineColorAndroid = "transparent"
          placeholder = "ID del departamento a que pertenece..."
          placeholderTextColor = "#48C9B0"
          autoCapitalize = "none"
          onChangeText = {handleDepartamento}
           autoCapitalize='characters' 
      /> 
      
        </View>
    
  );
}


var clave,nombrePersonal,departamento

var handleClave = (text) => {
  clave= text 
}
var handleNombrePersonal = (text) => {
  nombrePersonal= text 
}
var handleDepartamento = (text) => {
  departamento= text 
}


const styles = StyleSheet.create({
   
    textoutput:{
      fontWeight: "bold",
    },
    input: {
      
      margin: 15,
      height: 40,
      borderColor: 'lime',
      borderWidth: 1,
      color: 'green' ,
      
   }
  });